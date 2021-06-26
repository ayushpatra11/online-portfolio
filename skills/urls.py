from rest_framework import routers, urlpatterns
from .api import SkillsViewSet

router=routers.DefaultRouter()

router.register('skills', SkillsViewSet, 'skills')

urlpatterns=router.urls