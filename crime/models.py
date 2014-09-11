from django.db import models
from geoposition.fields import GeopositionField


gouv_choice = (
    ('Ariana', 'Ariana'),
    ('Beja', 'Beja'),
    ('Ben Arous', 'Ben Arous'),
    ('Bizerte', 'Bizerte'),
    ('Gabes', 'Gabes'),
    ('Gafsa', 'Gafsa'),
    ('Jendouba', 'Jendouba'),
    ('Kairouan', 'Kairouan'),
    ('Kasserine', 'Kasserine'),
    ('Kebili', 'Kebili'),
    ('Kef', 'Kef'),
    ('Mahdia', 'Mahdia'),
    ('Manouba', 'Manouba'),
    ('Medenine', 'Medenine'),
    ('Monastir', 'Monastir'),
    ('Nabeul', 'Nabeul'),
    ('Sfax', 'Sfax'),
    ('Sidi Bouzid', 'Sidi Bouzid'),
    ('Siliana', 'Siliana'),
    ('Sousse', 'Sousse'),
    ('Tataouine', 'Tataouine'),
    ('Tozeur', 'Tozeur'),
    ('Tunis', 'Tunis'),
    ('Zaghouan', 'Zaghouan'),
)
crime_choice = (
    ('braquage', 'braquage'),
    ('harcelement sexuelle', 'harcelement sexuelle'),
    ('viole', 'viole'),
    ('vol', 'vol'),
    ('agression', 'agression'),
    ('assassinat', 'assassinat'),
    ('kidnap', 'kidnap'),
)
sexchoice = (
    ('Homme', 'Homme'),
    ('Femme', 'Femme'),
)


class crime(models.Model):
    gouvernorat = models.CharField(max_length=30, choices=gouv_choice, default='Tunis', help_text="Gouvernorat:")
    description = models.TextField(help_text="informations:")
    sexe = models.CharField(max_length=15, choices=sexchoice, help_text="sexe")
    time = models.DateTimeField(auto_now_add=False, auto_now=False, verbose_name="Date de crime",
                                help_text="Date et Heure du crime: ")
    position = GeopositionField()
    crimetype = models.CharField(max_length=30, choices=crime_choice, help_text=" crime :")

    def __unicode__(self):
        return 'Tunisie'