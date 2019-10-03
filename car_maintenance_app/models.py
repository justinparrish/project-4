from django.db import models
import datetime

year_choice = [(x,x) for x in range(1960,2019)]

services = [
    ('Brake Pads','brakes'),
    ('Brake Rotors','rotors'),
    ('Oil','oil change'),
    ('Air Filter','air filter'),
    ('Fuel Filter','fuel filter'),
    ('Spark Plug','spark plugs'),
    ('Tire Rotation','tire rotation'),
    ('Tire Balancing','tire balancing'),
    ('Transmission Flush','transmission flush'),
    ('Radiator Flush','radiator flush'),
    ('Inspection','inspection')
]

class Owner(models.Model):
    username = models.CharField(max_length=20, unique=True)
    email = models.EmailField(max_length=345)

class Car(models.Model):
    image_url = models.CharField(max_length=300)
    nickname = models.CharField(max_length=20)
    year = models.IntegerField(choices=year_choice)
    make = models.CharField(max_length=20)
    model = models.CharField(max_length=20)
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE, related_name='owners')
    
class ServiceHistory(models.Model):
    dealership = models.CharField(max_length=60)
    location = models.CharField(max_length=60)
    service = models.CharField(choices=services, max_length=20)
    mileage = models.BigIntegerField()
    price = models.FloatField()
    date = models.DateField()
    note = models.CharField(max_length=300)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='cars')
    
    

    

    


