"""
Vercel serverless function entry point for Django.
"""
import os
import sys

# Add the project directory to the sys.path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Set the settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myeyelevel_django.settings')

# Import Django WSGI handler
from django.core.wsgi import get_wsgi_application
from vercel_django import handle_wsgi

# Get the WSGI application
application = get_wsgi_application()

# Vercel handler
def handler(request, **kwargs):
    """Handle incoming requests for Vercel serverless functions."""
    return handle_wsgi(application, request)
