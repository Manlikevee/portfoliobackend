import shortuuid
from django.shortcuts import render, redirect
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from mainapp.forms import myprojectform, MyImageForm
from mainapp.models import MyImage, Support
from mainapp.serializer import Posts, Postsimg


# Create your views here.


def homepage(request):
    myprojects = Support.objects.all()
    return render(request, 'index.html', {'myprojects': myprojects})


@api_view(['GET'])
def projectdetail(request, id):
    user = request.user
    print(id)
    useraccount = Support.objects.filter(reference=id).first()
    userimages = MyImage.objects.filter(parent_instance=useraccount).all()
    userimgdata = Postsimg(userimages, many=True)
    useraccountdata = Posts(useraccount)
    print(userimgdata.data)
    context = {
        'useraccountdata': useraccountdata.data,
        'userimg': userimgdata.data
    }
    return Response(context, status=status.HTTP_200_OK)


def upload_projectdata(request):
    s = shortuuid.ShortUUID(alphabet="0123456789")
    key = s.random(length=9)
    if request.method == 'POST':
        form = myprojectform(request.POST, request.FILES)
        imageform = MyImageForm(request.POST, request.FILES)
        if form.is_valid() and imageform.is_valid():
            my_data = form.save(commit=False)
            my_data.reference = key
            my_data.user = request.user
            my_data.save()
            print('done')

            uploaded_images = request.FILES.getlist('image')
            for uploaded_image in uploaded_images:
                my_image = MyImage(image=uploaded_image, parent_instance=my_data)
                my_image.save()

            print('done')

    else:
        form = myprojectform()
        imageform = MyImageForm()
    return render(request, 'upload.html', {'form': form, 'imageform': imageform})
