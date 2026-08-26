from django.http import JsonResponse
from rest_framework import generics

from .models import Project
from .serializers import ProjectSerializer
from .models import Project, ContactMessage
from .serializers import ProjectSerializer, ContactMessageSerializer



def api_home(request):
    return JsonResponse({
        'message': 'Portfolio API is running',
        'projects': '/api/projects/',
    })


class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer