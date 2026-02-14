"""
ASGI config for myeyelevel_django project.
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myeyelevel_django.settings')

application = get_asgi_application()
