# Generated by Django 3.0.5 on 2021-05-03 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PG', '0002_users_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Properties',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Property_Name', models.CharField(max_length=50)),
                ('Property_Description', models.TextField(max_length=200)),
                ('Property_Location_City', models.CharField(max_length=50)),
                ('Property_Location_State', models.CharField(max_length=30)),
                ('No_Of_Beds', models.IntegerField()),
                ('No_Of_Rooms', models.IntegerField()),
                ('Category', models.CharField(max_length=10)),
                ('Type1', models.CharField(max_length=5)),
                ('Type2', models.CharField(max_length=5)),
                ('Rent', models.IntegerField()),
                ('Image1', models.ImageField(upload_to='')),
                ('Image2', models.ImageField(upload_to='')),
                ('Image3', models.ImageField(upload_to='')),
                ('Image4', models.ImageField(upload_to='')),
                ('Image5', models.ImageField(upload_to='')),
                ('Image6', models.ImageField(upload_to='')),
                ('Image7', models.ImageField(upload_to='')),
                ('Image8', models.ImageField(upload_to='')),
                ('Image9', models.ImageField(upload_to='')),
                ('Image10', models.ImageField(upload_to='')),
            ],
        ),
    ]