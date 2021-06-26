from django.db.models import fields
from rest_framework import serializers
from .models import Projects

class ProjectSerialiser(serializers.ModelSerializer):
    class Meta:
        model=Projects
        fields='__all__'