"""
Middleware to enforce English-only language and rewrite external links to local paths.
"""
from django.shortcuts import redirect
from urllib.parse import parse_qsl, urlencode
import re


class EnglishOnlyMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Force English for all US pages
        if request.path.startswith('/US'):
            query = request.META.get('QUERY_STRING', '')
            params = dict(parse_qsl(query, keep_blank_values=True)) if query else {}
            changed = False

            if params.get('lang') != 'en':
                params['lang'] = 'en'
                changed = True

            if params.get('country') != 'US':
                params['country'] = 'US'
                changed = True

            if changed and request.method in ('GET', 'HEAD'):
                new_query = urlencode(params)
                return redirect(f"{request.path}?{new_query}")
        
        # Redirect non-US country paths to US English
        non_us_countries = ['/Global/', '/HongKong/', '/Macau/', '/India/', 
                           '/Indonesia/', '/Malaysia/', '/Singapore/', '/UK/']
        for country in non_us_countries:
            if request.path.startswith(country):
                return redirect('/US/index.do?lang=en&country=US')
        
        response = self.get_response(request)
        
        # Rewrite myeyelevel.com links to local paths in HTML responses
        if hasattr(response, 'content') and response.get('Content-Type', '').startswith('text/html'):
            response['Cache-Control'] = 'no-store'
            content = response.content.decode('utf-8', errors='ignore')
            
            # Replace https://www.myeyelevel.com/US/ with /US/
            content = re.sub(
                r'href=["\']https?://(?:www\.)?myeyelevel\.com(/US/[^"\'\s]*)["\']',
                r'href="\1"',
                content
            )

            # Rewrite common asset roots to Django static
            # e.g. /css/foo.css -> /static/css/foo.css
            #      /Upload/...  -> /static/images/Upload/...
            content = re.sub(r'(["\'])/css/', r'\1/static/css/', content)
            content = re.sub(r'(["\'])/js/', r'\1/static/js/', content)
            content = re.sub(r'(["\'])/images/', r'\1/static/images/', content)
            content = re.sub(r'(["\'])/fonts/', r'\1/static/fonts/', content)
            content = re.sub(r'(["\'])/Upload/', r'\1/static/images/Upload/', content)

            # Rewrite absolute asset URLs from myeyelevel.com to local static
            content = re.sub(r'(["\'])https?://(?:www\.)?myeyelevel\.com/css/', r'\1/static/css/', content)
            content = re.sub(r'(["\'])https?://(?:www\.)?myeyelevel\.com/js/', r'\1/static/js/', content)
            content = re.sub(r'(["\'])https?://(?:www\.)?myeyelevel\.com/images/', r'\1/static/images/', content)
            content = re.sub(r'(["\'])https?://(?:www\.)?myeyelevel\.com/Upload/', r'\1/static/images/Upload/', content)
            
            response.content = content.encode('utf-8')
        
        return response
