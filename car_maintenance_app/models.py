from django.db import models

year_choice = [(x,x) for x in range(1960,2019)]

services = [
    ('brakes','brakes'),
    ('rotors','rotors'),
    ('oil changes','oil change')
]

class Owner(models.Model):
    username = models.CharField(max_length=20, unique=True)
    email = models.EmailField(max_length=345)

class Car(models.Model):
    image_url = models.CharField(max_length=300)
    year = models.IntegerField(choices=year_choice)
    make = models.CharField(max_length=20)
    model = models.CharField(max_length=20)
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE, related_name='owners')
    
class ServiceHistory(models.Model):
    dealership = models.CharField(max_length=60)
    location = models.CharField(max_length=60)
    service = models.CharField(choices=services, max_length=20)
    

    

    


