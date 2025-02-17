from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("sign-in",views.SignInView, name="sign-in")
]