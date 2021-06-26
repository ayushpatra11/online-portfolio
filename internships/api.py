from .models import Internships
from .serializer import InternshipSerializer
from rest_framework import viewsets, permissions

class InternshipViewSets(viewsets.ModelViewSet):
    queryset=Internships.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=InternshipSerializer