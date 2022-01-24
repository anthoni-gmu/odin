from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'category',
            'color',
            'sizes',
            'parent',
            'title',
            'description',
            'price',
            'quantity',
            'photo',
            'num_visits',
            'last_visit'
        ]
        