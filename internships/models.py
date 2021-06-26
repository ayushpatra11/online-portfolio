from django.db import models

# Create your models here.
class Internships(models.Model):
    name=models.CharField(max_length=50)
    positions=models.CharField(max_length=50)
    duration=models.CharField(max_length=50)
    description=models.CharField(max_length=500)