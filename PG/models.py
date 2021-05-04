from django.db import models


# Create your models here.
class Users(models.Model):
    username = models.CharField(max_length=100,default='')
    name = models.CharField(max_length=50)
    email_id = models.CharField(max_length=20)
    password = models.CharField(max_length=30)
    profile = models.ImageField()

class Properties(models.Model):
    Property_Name = models.CharField(max_length=50)
    Property_Description = models.TextField(max_length=200)
    Property_Location_City = models.CharField(max_length=50)
    Property_Location_State = models.CharField(max_length=30)
    No_Of_Beds = models.IntegerField()
    No_Of_Rooms = models.IntegerField()
    Category = models.CharField(max_length=10)
    Type1 = models.CharField(max_length=15)
    Type2 = models.CharField(max_length=10)
    Rent = models.IntegerField()
    Image1 = models.ImageField(max_length=100)
    Image2 = models.ImageField(max_length=100)
    Image3 = models.ImageField(max_length=100)
    Image4 = models.ImageField(max_length=100)
    Image5 = models.ImageField(max_length=100)
    Image6 = models.ImageField(max_length=100)
    Image7 = models.ImageField(max_length=100)
    Image8 = models.ImageField(max_length=100)
    Image9 = models.ImageField(max_length=100)
    Image10 = models.ImageField(max_length=100)
    # class Properties(models.Model):
