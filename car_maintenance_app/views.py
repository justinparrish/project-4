from rest_framework import viewsets
from .serializers import CarSerializer, OwnerSerializer, ServiceSerializer
from .models import Car, Owner, ServiceHistory

class OwnerViewSet(viewsets.ModelViewSet):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
class ServiceViewSet(viewsets.ModelViewSet):
    queryset = ServiceHistory.objects.all()
    serializer_class = ServiceHistorySerializer