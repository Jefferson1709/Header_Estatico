from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import ArtigoViewSet, UserViewSet

# Create your urls here.
router = DefaultRouter()
router.register('artigos', ArtigoViewSet, basename='artigos')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]