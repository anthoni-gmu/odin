from django.urls import path

from .views import ListCategoriesView,ListColorView

urlpatterns = [
    path('categories', ListCategoriesView.as_view()),
    path('colors', ListColorView.as_view()),
]