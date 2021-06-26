from django.db import models
from django.db.models.base import Model

# Create your models here.
class Education(models.Model):
    name=models.CharField(max_length=50)
    degree=models.CharField(max_length=50)
    stream=models.CharField(max_length=50)
    duration=models.CharField(max_length=50)
    scholarships=models.CharField(max_length=50, blank=True)
    marks=models.CharField(max_length=50)
    otheract=models.CharField(max_length=100)