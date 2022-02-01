from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework.pagination import PageNumberPagination

from apps.product.models import Product
from apps.product.serializers import ProductSerializer
from apps.category.models import Category, Color
from django.db.models import Q


from .utilities import randomProducts as random
from django.utils import timezone
from django.conf import settings


class ResponsePagination(PageNumberPagination):
    page_query_param = 'p'
    page_size = 6
    page_size_query_param = 'page_size'
    max_page_size = 6

class ListProductsView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        sortBy = request.query_params.get('sortBy')
        paginator= ResponsePagination()
        if not (sortBy == 'date_added' or sortBy == 'price' or sortBy == 'sold' or sortBy == 'title'):
            sortBy = 'date_added'

        order = request.query_params.get('order')
        limit = request.query_params.get('limit')

        if not limit:
            limit = 6

        try:
            limit = int(limit)
        except:
            return Response(
                {'error': 'Limit must be an integer'},
                status=status.HTTP_404_NOT_FOUND)

        if limit <= 0:
            limit = 6

        if order == 'desc':
            sortBy = '-' + sortBy
            products = Product.objects.order_by(sortBy).all()[:int(limit)]
        elif order == 'asc':
            products = Product.objects.order_by(sortBy).all()[:int(limit)]
        else:
            products = Product.objects.order_by(sortBy).all()
        products = paginator.paginate_queryset(products, request)

        products = ProductSerializer(products, many=True , context={'request':request})

        if products:

            return paginator.get_paginated_response(products.data)
            
        else:
            return Response(
                {'error': 'No products to list'},
                status=status.HTTP_404_NOT_FOUND)



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

            # visits
            product.num_visits = product.num_visits + 1
            product.last_visit = timezone.now()
            product.save()

            # Serializers
            product = ProductSerializer(product,context={"request": request})
            related_products = random(related_products, 4)
            related_products = ProductSerializer(related_products, many=True,context={"request": request})
            products_colors = ProductSerializer(products_colors, many=True,context={"request": request})

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
        products_news = list(Product.objects.order_by('-date_added'))
        products_views = list(Product.objects.order_by('-num_visits'))
        products_sold = list(Product.objects.order_by('-sold'))

        if products_featured:
            products_featured = random(products_featured, 4)
            products_featured = ProductSerializer(products_featured, many=True,context={"request": request})

            products_news = random(products_news, 4)
            products_news = ProductSerializer(products_news, many=True,context={"request": request})

            products_views = random(products_views, 4)
            products_views = ProductSerializer(products_views, many=True,context={"request": request})

            products_sold = random(products_sold, 4)
            products_sold = ProductSerializer(products_sold, many=True,context={"request": request})

            return Response(
                {'categories': {
                    'Relevantes': products_featured.data,
                    'Nuevos': products_news.data,
                    'Más vistos': products_views.data,
                    'Más vendidos': products_sold.data
                }
                }, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'No products to list'},
                status=status.HTTP_404_NOT_FOUND)



class ListSearchView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        try:
            category_id = int(data['category_id'])
        except:
            return Response(
                {'error': 'Category ID must be an integer'},
                status=status.HTTP_404_NOT_FOUND)

        search = data['search']

        # Chequear si algo input ocurrio en la busqueda
        if len(search) == 0:
            # mostrar todos los productos si no hay input en la busqueda
            search_results = Product.objects.order_by('-date_added').all()
        else:
            # Si hay criterio de busqueda, filtramos con dicho criterio usando Q
            search_results = Product.objects.filter(
                Q(description__icontains=search) | Q(title__icontains=search)
            )

        if category_id == 0:
            search_results = ProductSerializer(search_results, many=True)
            return Response(
                {'search_products': search_results.data},
                status=status.HTTP_200_OK)

        # revisar si existe categoria
        if not Category.objects.filter(id=category_id).exists():
            return Response(
                {'error': 'Category not found'},
                status=status.HTTP_404_NOT_FOUND)

        category = Category.objects.get(id=category_id)

        # si la categoria tiene apdre, fitlrar solo por la categoria y no el padre tambien
        if category.parent:
            search_results = search_results.order_by(
                '-date_added'
            ).filter(category=category)

        else:
            # si esta categoria padre no tiene hijjos, filtrar solo la categoria
            if not Category.objects.filter(parent=category).exists():
                search_results = search_results.order_by(
                    '-date_added'
                ).filter(category=category)

            else:
                categories = Category.objects.filter(parent=category)
                filtered_categories = [category]

                for cat in categories:
                    filtered_categories.append(cat)

                filtered_categories = tuple(filtered_categories)

                search_results = search_results.order_by(
                    '-date_added'
                ).filter(category__in=filtered_categories)

        search_results = ProductSerializer(search_results, many=True)
        return Response({'search_products': search_results.data}, status=status.HTTP_200_OK)


class ListBySearchView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        paginator= ResponsePagination()


        search= data['search']

        if len(search) == 0:
            # mostrar todos los productos si no hay input en la busqueda
            product_results = Product.objects.order_by('-date_added').all()
        else:
            # Si hay criterio de busqueda, filtramos con dicho criterio usando Q
            product_results = Product.objects.filter(
                Q(description__icontains=search) | Q(title__icontains=search)
            )

        try:
            category_id = int(data['category_id'])
        except:
            return Response(
                {'error': 'Category ID must be an integer'},
                status=status.HTTP_404_NOT_FOUND)
        color_id = int(data['color_id'])
        print("cat", category_id)
        price_range = data['price_range']
        sort_by = data['sort_by']

        if not (sort_by == 'date_added' or sort_by == 'price' or sort_by == 'sold' or sort_by == 'name'):
            sort_by = 'date_added'

        order = data['order']

        # Si categoryID es = 0, filtrar todas las categorias
        if category_id == 0:
            product_results = Product.objects.all()

        elif not Category.objects.filter(id=category_id).exists():
            return Response(
                {'error': 'This category does not exist'},
                status=status.HTTP_404_NOT_FOUND)
        else:
            category = Category.objects.get(id=category_id)

            if category.parent:
                # Si la categoria tiene padrem filtrar solo por la categoria y no el padre tambien
                product_results = Product.objects.filter(category=category)
            else:
                if not Category.objects.filter(parent=category).exists():
                    product_results = Product.objects.filter(category=category)
                else:
                    categories = Category.objects.filter(parent=category)
                    filtered_categories = [category]

                    for cat in categories:
                        filtered_categories.append(cat)
                    filtered_categories = tuple(filtered_categories)
                    product_results = Product.objects.filter(
                        category__in=filtered_categories)


        if len(search) == 0:
            # mostrar todos los productos si no hay input en la busqueda
            product_results = product_results
        else:
            # Si hay criterio de busqueda, filtramos con dicho criterio usando Q
            product_results = product_results.filter(
                Q(description__icontains=search) | Q(title__icontains=search)
            )



        if color_id == 0:
            product_results = product_results
        elif not Color.objects.filter(id=color_id).exists():
            return Response(
                {'error': 'This Color does not exist'},
                status=status.HTTP_404_NOT_FOUND)
        else:
            color = Color.objects.get(id=color_id)
            product_results = product_results.filter(color=color)

        # Filtrar por precio
        if price_range == '1 - 50':
            product_results = product_results.filter(price__gte=1)
            product_results = product_results.filter(price__lt=51)
        elif price_range == '51 - 70':
            product_results = product_results.filter(price__gte=51)
            product_results = product_results.filter(price__lt=71)
        elif price_range == '71 - 90':
            product_results = product_results.filter(price__gte=71)
            product_results = product_results.filter(price__lt=91)
        elif price_range == '91 - 119':
            product_results = product_results.filter(price__gte=91)
            product_results = product_results.filter(price__lt=120)
        elif price_range == 'Más de 120':
            product_results = product_results.filter(price__gte=120)

        # Filtrar producto por sort_by
        if order == 'desc':
            sort_by = '-' + sort_by
            product_results = product_results.order_by(sort_by)
        elif order == 'asc':
            product_results = product_results.order_by(sort_by)
        else:
            product_results = product_results.order_by(sort_by)
        
        product_results = paginator.paginate_queryset(product_results, request)
        product_results = ProductSerializer(product_results, many=True,context={"request": request})


        if len(product_results.data) > 0:
            return paginator.get_paginated_response(product_results.data)
        else:
            return Response(
                {'error': 'No products found'},
                status=status.HTTP_200_OK)
