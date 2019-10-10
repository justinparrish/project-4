from rest_framework import serializers
from .models import Car, Owner, Service

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = ['id', 'username', 'email']

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'image_url', 'nickname', 'year', 'make', 'model', 'owner']
        
class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'dealership', 'location', 'service', 'mileage', 'price', 'date', 'note', 'car']