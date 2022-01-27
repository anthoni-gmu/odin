from django.db import models

from datetime import datetime 

from apps.category.models import Category,Color,Size

class Product(models.Model):
    category=models.ForeignKey(Category,related_name='products',on_delete=models.CASCADE)
    color=models.ManyToManyField(Color,blank=True)
    sizes=models.ManyToManyField(Size,blank=True)

    parent=models.ForeignKey('self', related_name='variants', on_delete=models.CASCADE,blank=True,null=True)

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True,null=True)
    
    price=models.FloatField()
    is_featured=models.BooleanField(default=False)
    quantity=models.IntegerField(default=1)
    date_added=models.DateTimeField( default=datetime.now)

    num_visits = models.IntegerField(default=0)
    last_visit = models.DateTimeField(blank=True, null=True)
    solt = models.IntegerField(default=0)
    photo = models.ImageField(upload_to='photos/%Y/%m/')


    class Meta:
        ordering=('-date_added',)

    def __str__(self):
        return self.title

