from django.urls import include, path                    
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r'car', views.CarViewSet)
router.register(r'owner', views.OwnerSerializer)





urlpatterns = [
    path('', include(router.urls)),
]