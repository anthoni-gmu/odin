from django.urls import path

from apps.product.views import (
    ProductDetailView,
    ListProductsHomeView
)

app_name="product"
urlpatterns = [
    path('product/<productId>', ProductDetailView.as_view()),
    path('frontpage', ListProductsHomeView.as_view()),

]