from django.contrib import admin

from apps.category.models import Category,Size,Color

# Register your models here.
admin.site.register(Category)
admin.site.register(Size)
admin.site.register(Color)