from rest_framework import routers, urlpatterns
from .api import ProjectViewSets

router=routers.DefaultRouter()

router.register('projects', ProjectViewSets, 'projects')

urlpatterns=router.urls