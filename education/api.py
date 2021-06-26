from .models import Education
from .serializers import EducationSerializer
from rest_framework import viewsets, permissions

class EducationViewsets(viewsets.ModelViewSet):
    queryset=Education.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=EducationSerializer