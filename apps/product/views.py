from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from apps.product.models import Product
from apps.product.serializers import ProductSerializer
from apps.category.models import Category
from django.db.models import Q


from .utilities import randomProducts as random
from django.utils import timezone

class ProductDetailView(APIView):
    permission_classes = (permissions.AllowAny, )
    
    def get(self, request, productId, format=None):
        try:
            product_id = int(productId)
        except:
            return Response(
                {'error': 'Product ID must be an integer'},
                status=status.HTTP_404_NOT_FOUND)

        if Product.objects.filter(id=product_id).exists():
            product = Product.objects.get(id=product_id)

            related_products = product.category.products.filter(
                parent=None).exclude(id=product.id)

            if product.variants.all():
                products_colors = list(
                    product.variants.all().exclude(id=product.id))
            elif product.parent:
                products_colors = list(
                    product.parent.variants.all().exclude(id=product.id))
                related_products = list(product.category.products.filter(
                    parent=None).exclude(id=product.parent.id))

                products_colors.append(product.parent)
            else:
                products_colors = []

            #visits
            product.num_visits = product.num_visits + 1
            product.last_visit = timezone.now()
            product.save()

            # Serializers
            product = ProductSerializer(product)
            related_products = ProductSerializer(related_products, many=True)
            products_colors = ProductSerializer(products_colors, many=True)

           

            return Response({
                'product': product.data,
                'related_products': related_products.data,
                'products_colors': products_colors.data
            }, status=status.HTTP_200_OK)

        else:
            return Response(
                {'error': 'Product with this ID does not exist'},
                status=status.HTTP_404_NOT_FOUND)


class ListProductsHomeView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        products_featured = list(Product.objects.filter(is_featured=True))

        if products_featured:
            products_featured = random(products_featured, 4)
            products_featured = ProductSerializer(products_featured, many=True)

            return Response({'products': products_featured.data}, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'No products to list'},
                status=status.HTTP_404_NOT_FOUND)
