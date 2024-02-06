from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(blank=True, max_length=500)
    email = models.CharField(blank=True, max_length=5000)
    message = models.TextField(blank=True, max_length=5000)

    def __str__(self):
        return self.name


class Support(models.Model):
    Accounttype = [
        ('pending', 'pending'),
        ('treated', 'treated'),

    ]

    Projecttype = [
        ('HTML', 'HTML'),
        ('JS', 'JS'),
        ('DJANGO', 'DJANGO'),
        ('NATIVE', 'NATIVE'),
        ('REACT', 'REACT'),
        ('NEXT', 'NEXT'),
        ('GATSBY', 'GATSBY'),

    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reference = models.CharField(blank=True, max_length=500)
    title = models.CharField(blank=True, max_length=500)
    description = models.TextField(blank=True, max_length=5000)
    client = models.TextField(blank=True, max_length=5000, null=True)
    liveurl = models.TextField(blank=True, max_length=5000, null=True)
    status = models.CharField(max_length=100, default='pending', choices=Accounttype)
    category = models.CharField(max_length=100, default='HTML', choices=Projecttype)
    posteddate = models.DateTimeField(auto_now_add=True)
    coverimage = models.ImageField(upload_to='coverimages/', null=True, blank=True)
    def __str__(self):
        return self.title




class MyImage(models.Model):
    image = models.ImageField(upload_to='images/')
    parent_instance = models.ForeignKey(Support, on_delete=models.CASCADE)


    def __str__(self):
        return self.parent_instance.title


