from django.urls import path
from .views import api_home, ProjectListCreateView
from .views import api_home, ProjectListCreateView, ContactMessageCreateView

urlpatterns = [
    path('', api_home, name='api-home'),
    path('projects/', ProjectListCreateView.as_view(), name='project-list-create'),
    path('contact/', ContactMessageCreateView.as_view(), name='contact-create'),
]