from django.urls import path
from . import views
urlpatterns = [
path('', views.home),
# path('login',views.login),
path('signup',views.signup),
path('login',views.login),
path('logout',views.logout),
path('discussion',views.discuss),
path('contactus', views.contact),
path('answer', views.answer),
]
