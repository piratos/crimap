from django.conf.urls import patterns, url, include

urlpatterns = patterns('crime.views',
                       url(r'^accueil/$', 'acceuil', name='acceuil'),
                       url(r'^new_crime/$', 'add_crime', name='add_crime'),
                       url(r'^thanks/$', 'thanks', name='thanks'),
                       url(r'^statistique/$', 'statistique', name='statistique'),
                       url(r'^supprimer/$', 'delete', name='supprimer'),
                       url(r'^modifier/$', 'modify', name='modifier'),
                       url(r'^statistique/filter/$', 'filtercrime', name='filter'),
                       url(r'stat/', 'stat', name='stat'),
                       url(r'cdata/', 'calendar_data'),
                       url(r'cal/', 'cal'),
                       url(r'mod/', 'mod_crime'),
                       url(r'carte/', 'carte'), )
