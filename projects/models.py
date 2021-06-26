from django.db import models

# Create your models here.
class Projects(models.Model):
    ytlink=models.CharField(max_length=200)
    githublink=models.CharField(max_length=200)