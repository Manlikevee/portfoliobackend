from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class Posts(serializers.ModelSerializer):
    class Meta:
        model = Support
        fields = '__all__'


class Postsimg(serializers.ModelSerializer):
    class Meta:
        model = MyImage
        fields = ['image']
