from django.db import models

# Create your models here.

class Skills(models.Model):
    skillname=models.CharField(max_length=100)
    skillicon=models.CharField(max_length=50)