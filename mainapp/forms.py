from django import forms
from .models import MyImage, Support, Contact


class MyImageForm(forms.ModelForm):
    class Meta:
        model = MyImage
        fields = ['image']


    def __init__(self, *args, **kwargs):
        super(MyImageForm, self).__init__(*args, **kwargs)
        self.fields['image'].widget.attrs.update({'multiple': True})


class myprojectform(forms.ModelForm):
    class Meta:
        model = Support
        fields = ['title', 'description', 'category', 'coverimage']



class mycontactform(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'message']