# Generated by Django 4.2.6 on 2023-11-01 14:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MyImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/')),
                ('parent_instance', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.support')),
            ],
        ),
    ]
