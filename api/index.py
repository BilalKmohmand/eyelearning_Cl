"""
Vercel serverless function entry point for Django using WSGI.
"""
import os
import sys
from io import BytesIO
from urllib.parse import urlencode

# Add the project directory to the sys.path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Set the settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myeyelevel_django.settings')

# Import Django WSGI handler
from django.core.wsgi import get_wsgi_application

# Get the WSGI application
application = get_wsgi_application()


def handler(event, context):
    """
    Vercel serverless function handler.
    Converts Vercel's event format to WSGI environ and calls the Django app.
    """
    method = event.get('method', 'GET')
    headers = {k.lower(): v for k, v in event.get('headers', {}).items()}
    path = event.get('path', '/')
    query = event.get('query', {})
    body = event.get('body', '') or ''
    
    query_string = urlencode(query) if isinstance(query, dict) else query
    
    if body:
        if isinstance(body, str):
            body_bytes = body.encode('utf-8')
        else:
            body_bytes = body
    else:
        body_bytes = b''
    
    environ = {
        'REQUEST_METHOD': method,
        'SCRIPT_NAME': '',
        'PATH_INFO': path,
        'QUERY_STRING': query_string,
        'SERVER_NAME': headers.get('host', 'vercel.app').split(':')[0],
        'SERVER_PORT': headers.get('x-forwarded-port', '443'),
        'HTTP_HOST': headers.get('host', 'vercel.app'),
        'HTTP_USER_AGENT': headers.get('user-agent', ''),
        'HTTP_ACCEPT': headers.get('accept', '*/*'),
        'HTTP_ACCEPT_ENCODING': headers.get('accept-encoding', ''),
        'HTTP_ACCEPT_LANGUAGE': headers.get('accept-language', ''),
        'CONTENT_TYPE': headers.get('content-type', ''),
        'CONTENT_LENGTH': str(len(body_bytes)),
        'wsgi.version': (1, 0),
        'wsgi.url_scheme': headers.get('x-forwarded-proto', 'https'),
        'wsgi.input': BytesIO(body_bytes),
        'wsgi.errors': sys.stderr,
        'wsgi.multithread': False,
        'wsgi.multiprocess': False,
        'wsgi.run_once': False,
    }
    
    for header_name, header_value in headers.items():
        if header_value:
            wsgi_name = 'HTTP_' + header_name.upper().replace('-', '_')
            if wsgi_name not in environ:
                environ[wsgi_name] = header_value
    
    if 'content-type' in headers:
        environ['CONTENT_TYPE'] = headers['content-type']
    if 'content-length' in headers:
        environ['CONTENT_LENGTH'] = str(len(body_bytes))
    
    response_status = None
    response_headers = []
    response_body = []
    
    def start_response(status, headers_list):
        nonlocal response_status, response_headers
        response_status = status
        response_headers = headers_list
        return lambda x: response_body.append(x)
    
    result = application(environ, start_response)
    
    for chunk in result:
        if chunk:
            response_body.append(chunk)
    
    body = b''.join(response_body)
    response_headers_dict = {k: v for k, v in response_headers}
    
    return {
        'statusCode': int(response_status.split()[0]),
        'headers': response_headers_dict,
        'body': body.decode('utf-8') if isinstance(body, bytes) else body,
    }
