from rest_framework import routers, urlpatterns
from .api import InternshipViewSets

router=routers.DefaultRouter()

router.register('internships', InternshipViewSets, 'internships')

urlpatterns=router.urls