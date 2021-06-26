from .models import Skills
from rest_framework import viewsets, permissions
from .serializer import SkillSerializer

class SkillsViewSet(viewsets.ModelViewSet):
    queryset=Skills.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=SkillSerializer