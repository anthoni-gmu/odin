from django.urls import path

from apps.product.views import ProductDetailView,ListProductsView

app_name="product"
urlpatterns = [
    path('product/<productId>', ProductDetailView.as_view()),
    path('get-products', ListProductsView.as_view()),

]