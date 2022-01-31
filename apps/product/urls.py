from django.urls import path

from apps.product.views import (
    ProductDetailView,
    ListProductsHomeView, ListProductsView, ListBySearchView, ListSearchView
)

app_name = "product"
urlpatterns = [
    path('product/<productId>', ProductDetailView.as_view()),
    path('frontpage', ListProductsHomeView.as_view()),
    path('get-products', ListProductsView.as_view()),
    path('by/search', ListBySearchView.as_view()),
    path('search', ListSearchView.as_view()),
]
