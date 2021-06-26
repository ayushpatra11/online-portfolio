from rest_framework import routers, urlpatterns
from .api import EducationViewsets

router=routers.DefaultRouter()

router.register('education', EducationViewsets, 'education')

urlpatterns=router.urls