from django.shortcuts import render, redirect


# Create your views here.
from PG.models import Users


class PG_Views:

    def homepage(self,request):
        return render(request,'./index.html')

    def loginpage(self,request):
        if request.method == 'POST':
            var1 = request.POST.get('username', '')
            var2 = request.POST.get('password', '')
            objects = Users.objects.all().filter(username=var1 ,password=var2)
            if objects is None:
                print('Login Failure')
            else:
                return redirect('')
        return render(request,'./login.html')

    def signuppage(self,request):
        if request.method == 'POST':
            var0 = request.POST.get('name', '')
            var1 = request.POST.get('username', '')
            var2 = request.POST.get('password', '')
            var3 = request.POST.get('email_id', '')
            if var0 != '':
                add = Users(name=var0, username=var1, password=var2, email_id=var3,profile='')
                add.save()
            return redirect('')
        return render(request,'./signup.html')

    def properties(self,request):
        return render(request,'./properties.html')

    def properties_details(self,request,location,category,type1,type2):
        return render(request,'./properties_details.html')

    def contactspage(self,request):
        return  render(request,'./contact.html')

    def forgotpass(self,request):
        return render(request,'./forgotpass.html')