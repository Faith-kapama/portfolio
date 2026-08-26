from django.contrib import admin
from .models import Project, ContactMessage

# Register your models here.
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'technologies',
        'github_url',
        'live_url',
        'created_at',
    )
    search_fields = ('title', 'technologies')
    ordering = ('-created_at',)

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'email',
        'subject',
        'created_at',
    )
    search_fields = ('name', 'email', 'subject')
    ordering = ('-created_at',)

