# Generated by Django 3.2.4 on 2021-06-21 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ytlink', models.CharField(max_length=200)),
                ('githublink', models.CharField(max_length=200)),
            ],
        ),
    ]
