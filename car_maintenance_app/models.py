from django.db import models

class Car(models.Model):
    image = models.ImageField()
    year = models.IntegerField()
    make = models.CharField(max_length=20)
    model = models.CharField(max_length=20)
    


