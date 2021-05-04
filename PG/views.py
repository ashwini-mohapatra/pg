from django.http import response, HttpResponse
from django.shortcuts import render, redirect


# Create your views here.
from PG.models import Users, Properties


class PG_Views:

    def homepage(self,request):
        search = Properties.objects.all()
        if request.method == 'POST':
            location = request.POST.get('location', '')
            type1 = request.POST.get('type1', '')
            category = request.POST.get('category', '')
            type2 = request.POST.get('type2', '')
            if location != '':
                search1 = search.filter(Property_Location_City=location)
                print(search1)
                if type1 != '':
                    search1 = search1.filter(Type1=type1)
                    print(search1)
                if type2 != '':
                    search1 = search1.filter(Type2=type2)
                    print(search1)
                if category != '':
                    search1 = search1.filter(Category=category)
                    print(search1)
                return render(request, './properties.html', {'search': search1})
            else:
                return redirect('/')
        return render(request,'./index.html')

    def loginpage(self,request):
        if request.method == 'POST':
            var1 = request.POST.get('email', '')
            var2 = request.POST.get('password', '')
            objects = Users.objects.all().filter(email_id=var1 ,password=var2)
            if objects is None:
                # HttpResponse.set_cookies('login_status', 0)
                return redirect('/login')
            else:
                # HttpResponse.set_cookies('login_status', 1)
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
                # HttpResponse.set_cookies('login_status', 1)
                return redirect('/')
            else:
                # HttpResponse.set_cookies('login_status', 0)
                return redirect('/signup')
        return render(request,'./signup.html')

    def properties(self,request):
        search = Properties.objects.all()
        if request.method == 'POST':
            location = request.POST.get('location', '')
            type1 = request.POST.get('type1', '')
            category = request.POST.get('category', '')
            type2 = request.POST.get('type2', '')
            if location != '':
                search1 = search.filter(Property_Location_City=location)
                print(search1)
                if type1 != '':
                    search1 = search1.filter(Type1=type1)
                    print(search1)
                if type2 != '':
                    search1 = search1.filter(Type2=type2)
                    print(search1)
                if category != '':
                    search1 = search1.filter(Category=category)
                    print(search1)
                return render(request, './properties.html', {'search': search1})
        return render(request,'./properties.html')

    def properties_details(self,request):
        search = Properties.objects.all()
        if request.method == 'POST':
            location = request.POST.get('location', '')
            type1 = request.POST.get('type1', '')
            category = request.POST.get('category', '')
            type2 = request.POST.get('type2', '')
            if location != '':
                search1 = search.filter(Property_Location_City=location)
                print(search1)
                if type1 != '':
                    search1 = search1.filter(Type1=type1)
                    print(search1)
                if type2 != '':
                    search1 = search1.filter(Type2=type2)
                    print(search1)
                if category != '':
                    search1 = search1.filter(Category=category)
                    print(search1)
                return render(request, './properties.html', {'search': search1})
        return render(request,'./properties_details.html')

    def contactspage(self,request):
        return render(request,'./contact.html')

    def forgotpass(self,request):
        return render(request,'./forgotpass.html')

    # def profile(self,request):
    #     return render(request,'./profile.html')