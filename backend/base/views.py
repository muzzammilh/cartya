from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .products import products

class ListProducts(APIView):
    def get(self, request):
        return Response(products)

class ListSingleProduct(APIView):
    def get(self, request, pk):
        product = None
        for i in products:
            if i['_id'] == pk:
                product = i
                break

        return Response(product)