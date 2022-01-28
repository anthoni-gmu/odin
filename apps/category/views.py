from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Category
from .models import Color


class ListCategoriesView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        if Category.objects.all().exists():
            categories = Category.objects.all()

            result = []

            for category in categories:
                if not category.parent:
                    item = {}
                    item['id'] = category.id
                    item['name'] = category.name
                    item['photo'] = category.photo.url

                    item['sub_categories'] = []
                    for cat in categories:
                        sub_item = {}
                        if cat.parent and cat.parent.id == category.id:
                            sub_item['id'] = cat.id
                            sub_item['name'] = cat.name
                            sub_item['photo'] = cat.photo.url
                            sub_item['sub_categories'] = []

                            item['sub_categories'].append(sub_item)
                    result.append(item)
            return Response({'categories': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No categories found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




class ListColorView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        if Color.objects.all().exists():
            colors = Color.objects.all()

            result = []

            for color in colors:
                item = {}
                item['id'] = color.id
                item['name'] = color.name

                result.append(item)
            return Response({'colors': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No color found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
