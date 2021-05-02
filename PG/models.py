from django.db import models


# Create your models here.
class Users(models.Model):
    username = models.CharField(max_length=100,default='')
    name = models.CharField(max_length=50)
    email_id = models.CharField(max_length=20)
    password = models.CharField(max_length=30)
    profile = models.ImageField()

    # class Properties(models.Model):
