document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвратить традиционную отправку формы

    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '', true); // отправить запрос на тот же URL
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('result').innerHTML = 'Ваша заявка отправлена!';
        }
    };
    xhr.send(formData);
});