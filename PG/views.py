from django.shortcuts import render, redirect


# Create your views here.
from PG.models import Users, Properties


class PG_Views:

    def homepage(self,request):
        if request.method == 'GET':
            location = request.GET.get('location','')
            type1 = request.GET.get('type1','')
            category = request.GET.get('category','')
            type2 = request.GET.get('type2','')
            if location != '':
                search = Properties.objects.all()
                if type1 != '':
                    search = search.filter(Type1=type1)
                if type2 != '':
                    search = search.filter(Type2=type2)
                if category != '':
                    search = search.filter(Category=category)
                return redirect('/properties',{'search':search})
        return render(request,'./index.html')

    def loginpage(self,request):
        if request.method == 'POST':
            var1 = request.POST.get('email', '')
            var2 = request.POST.get('password', '')
            objects = Users.objects.all().filter(email_id=var1 ,password=var2)
            if objects is None:
                print('Login Failure')
            else:
                return redirect('/')
        return render(request,'./login.html')

    def signuppage(self,request):
        if request.method == 'POST':
            var0 = request.POST.get('name', '')
            # var1 = request.POST.get('username', '')
            var2 = request.POST.get('password', '')
            var3 = request.POST.get('email', '')
            if var0 != '':
                add = Users(name=var0, password=var2, email_id=var3, profile='')
                add.save()
            return redirect('/')
        return render(request,'./signup.html')

    def properties(self,request):
        if request.method == 'GET':
            location = request.GET.get('location', '')
            type1 = request.GET.get('type1', '')
            category = request.GET.get('category', '')
            type2 = request.GET.get('type2', '')
            if location != '':
                search = Properties.objects.all()
                if type1 != '':
                    search = search.filter(Type1=type1)
                if type2 != '':
                    search = search.filter(Type2=type2)
                if category != '':
                    search = search.filter(Category=category)
                return redirect('/properties', {'search': search})
        return render(request,'./properties.html')

    def properties_details(self,request):
        return render(request,'./properties_details.html')

    def contactspage(self,request):
        return  render(request,'./contact.html')

    def forgotpass(self,request):
        return render(request,'./forgotpass.html')