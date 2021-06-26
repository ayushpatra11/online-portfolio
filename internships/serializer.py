from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Internships

class InternshipSerializer(serializers.ModelSerializer):
    class Meta:
        model=Internships
        fields='__all__'