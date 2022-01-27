from tabnanny import verbose
from django.db import models

class Category(models.Model):
    class Meta:
        verbose_name='Category'
        verbose_name_plural='Categories'
    parent = models.ForeignKey('self',related_name='children', on_delete=models.CASCADE ,blank=True,null=True)
    name=models.CharField(max_length=100,unique=True)
    is_featured=models.BooleanField(default=False)
    photo = models.ImageField(upload_to='photos/%Y/%m/')
    
    def __str__(self):
        return self.name


class Size(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

        
class Color(models.Model):
    class Meta:
        verbose_name='Color'
        verbose_name_plural='Colors'
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name