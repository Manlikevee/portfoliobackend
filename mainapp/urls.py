from django.urls import path, include
from .views import *
from django.contrib.auth import views as auth_view

urlpatterns = [
    path('', homepage, name='home'),
    path('upload', upload_projectdata, name='upload_projectdata'),
    path('projectdetail/<str:id>', projectdetail, name='projectdetail'),

]
