from rest_framework import serializers
from .models import Product
from apps.category.models import Size

class ProductSerializer(serializers.ModelSerializer):
    photo_url=serializers.SerializerMethodField()

    sizes_drop=serializers.SerializerMethodField()

    
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
            'photo_url',
            'num_visits',
            'last_visit',
            'sizes_drop'
        ]
    
        
        
    def get_photo_url(self, product):
        request = self.context.get('request')
        photo_url = product.photo.url
        return request.build_absolute_uri(photo_url)

    def get_sizes_drop(self, product):
        sizes_drop = product.sizes.all()
        result = []
        for i in sizes_drop:
            result.append(i.name)
        sizes_drop=result
        return sizes_drop
