from django.shortcuts import render,redirect
from .models import Question


def fetch(request):
    Questss=Question.objects.all().order_by('-i')
    return render(request,'home1.html',{'quests':Questss})

    # return render(request,'home1.html')