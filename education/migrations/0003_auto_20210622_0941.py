# Generated by Django 3.1.7 on 2021-06-22 04:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('education', '0002_alter_education_scholarships'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
