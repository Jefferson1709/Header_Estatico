from django.contrib import admin
from .models import Artigo

# Register your models in admin panel here.
@admin.register(Artigo)
class ArtigoModel(admin.ModelAdmin):
    list_filter = ('titulo','descricao')
    list_display = ('titulo','descricao')