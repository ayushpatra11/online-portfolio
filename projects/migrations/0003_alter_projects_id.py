# Generated by Django 3.2.4 on 2021-06-27 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_auto_20210622_0941'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
