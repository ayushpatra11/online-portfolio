from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Education


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Education
        fields='__all__'