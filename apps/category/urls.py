from django.urls import path

from .views import ListCategoriesView,ListColorView,ListSizesView

urlpatterns = [
    path('categories', ListCategoriesView.as_view()),
    path('colors', ListColorView.as_view()),
    path('sizes', ListSizesView.as_view()),
]