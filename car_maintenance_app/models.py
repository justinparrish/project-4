from django.db import models

year_choice = [(x,x) for x in range(1960,2019)]


class Owner(models.Model):
    username = models.CharField(max_length=20, unique=True)
    email = models.EmailField(max_length=345)

class Car(models.Model):
    image_url = models.CharField(max_length=300)
    year = models.IntegerField(choices=year_choice)
    make = models.CharField(max_length=20)
    model = models.CharField(max_length=20)
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE, related_name='owners')
    

    

    


