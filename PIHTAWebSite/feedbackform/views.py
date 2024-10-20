from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings

def send_mail_page(request):
    context = {}

    if request.method == 'POST':
        address = 'soldatenco96@mail.ru'
        phonenumber = request.POST.get('phonenumber')
        message = request.POST.get('message')

        if phonenumber and message:
            try:
                send_mail(phonenumber, message, settings.EMAIL_HOST_USER, [address])
                context['result'] = 'Ваша заявка отправлена!'
            except Exception as e:
                context['result'] = f'Ошибка отправки письма: {e}'
        else:
            context['result'] = 'Заполните все поля !'
    
    return render(request, "index.html", context)