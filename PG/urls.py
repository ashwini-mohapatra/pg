from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path

from PG.views import PG_Views
from PGAccomodation import settings

urlpatterns = [
    path('/',PG_Views().homepage,name='home'),
    path('login/', PG_Views().loginpage, name='login'),
    path('signup/', PG_Views().signuppage, name='signup'),
    path('properties/', PG_Views().properties, name='property'),
    path('properties_details/', PG_Views().properties_details, name='property_details'),
    path('contact/', PG_Views().contactspage, name='contacts'),
    path('forgotpass/', PG_Views().forgotpass,name='forgotpass'),
    path('admin/', admin.site.urls),
]
urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
