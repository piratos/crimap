from django.contrib import admin
from crime.models import crime


class CrimeAdmin(admin.ModelAdmin):
    list_display = ("crimetype", "sexe", "time")
admin.site.register(crime, CrimeAdmin)

