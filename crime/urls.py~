from django.conf.urls import patterns, url
from crime import views

urlpatterns=patterns('',
	url(r'^acceuil/$', views.acceuil , name='acceuil'),
	url(r'^new_crime/$', views.add_crime, name='add_crime'),
	url(r'^thanks/$', views.thanks, name='thanks'),
	url(r'^statistique/$',views.statistique, name='statistique'),
	url(r'^supprimer/$', views.delete, name='supprimer'),
	url(r'^modifier/$', views.modify , name='modifier'),
)
