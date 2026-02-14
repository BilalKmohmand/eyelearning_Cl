"""myeyelevel_django URL Configuration"""
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

urlpatterns = [
    path('images/blt/arrow2-down.png', lambda request: redirect("/static/images/blt/arrow2-down.png.svg")),
    path('images/icon/email.png', lambda request: redirect("/static/images/icon/email.png.svg")),
    path('images/icon/facebook.png', lambda request: redirect("/static/images/icon/facebook.png.svg")),
    path('images/icon/kakao.png', lambda request: redirect("/static/images/icon/kakao.png.svg")),
    path('images/icon/play.png', lambda request: redirect("/static/images/icon/play.png.svg")),
    path('images/<path:path>', lambda request, path: redirect(f"/static/images/{path}")),
    path('fonts/<path:path>', lambda request, path: redirect(f"/static/fonts/{path}")),
    path('Upload/<path:path>', lambda request, path: redirect(f"/static/images/Upload/{path}")),
    path('admin/', admin.site.urls),
    path('', include('pages.urls')),
]
