from rest_framework import viewsets, permissions
from .models import Projects
from .serializer import ProjectSerialiser

class ProjectViewSets(viewsets.ModelViewSet):
    queryset=Projects.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=ProjectSerialiser