from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ListProducts.as_view(), name='list-products'),
    path('products/<str:pk>', views.ListSingleProduct.as_view(), name='list-single-product')
]