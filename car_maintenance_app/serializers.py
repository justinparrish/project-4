from rest_framework import serializers
from .models import Car, Owner, ServiceHistory

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = ['id', 'username', 'email']

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'image_url', 'year', 'make', 'model', 'owner']
        
class ServiceHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceHistory
        fields = ['id', 'dealership', 'location', 'service', 'mileage', 'price', 'date', 'note', 'car']