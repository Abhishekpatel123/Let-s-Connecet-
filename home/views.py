from django.contrib.auth import login
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib import auth
# Create your views here.

def home(request):
    return render(request,'home.html')

def discuss(request):
    return render(request,'disquss.html')

    

def contact(request):
    return render(request,'contact.html')

def answer(request):
    return render(request,'answer.html')



def login(request):
    if request.method=="POST":
        # check if user is exist or not
        # with username and passowrd
        #here you will get the user object to authenticate the login details
        user=auth.authenticate(username=request.POST['username'],password=request.POST['psw']) 
        if user is not None:
            auth.login(request,user)
            messages.success(request, 'you loggedin ')
            return render(request,'home.html')
        else:
             messages.warning(request, 'invalid credentials! Please enter the right username and password')
             return redirect(login)
    else:
        return render(request,'login.html')



def signup(request):
    if request.method=="POST":
        # to create a user 
        if request.POST['psw']==request.POST['psw-repeat']:
            # if both the password matched
            # now check if a user is exist or not
           try:
               user =User.objects.get(username=request.POST['email'])
               return render(request,'signup.html',{"error":"Account already exist "})       


           except User.DoesNotExist:
               user=User.objects.create_user(username=request.POST['email'],password=request.POST['psw'])    
               messages.success(request, 'Congratulations!Your account has beend created successfully')
               return redirect(signup)

        else:
            return render(request,'signup.html',{"error":"password dont match"})       
    else:
        return render(request,'signup.html')

def logout(request):
    auth.logout(request)
    return redirect(home)


