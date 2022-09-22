import { keys } from '/assets/env/keys.js'

document.addEventListener("DOMContentLoaded", event => {

    emailjs.init('ej0fe7RuxjhvGh8bu')

    // * Form 1
    document.getElementById('form')
        .addEventListener('submit', function (event) {

            event.preventDefault();
            emailjs.sendForm(keys.service, keys.template, this)
                .then(() => {
                    form.reset();
                    alert('Enviado!');
                }, (err) => alert(JSON.stringify(err)));
        });

    // * Form 2
    document.getElementById('form2')
        .addEventListener('submit', function (event) {

            event.preventDefault();
            emailjs.sendForm(keys.service, keys.template, this)
                .then(() => {
                    form2.reset();
                    alert('Enviado!');
                }, (err) => alert(JSON.stringify(err)));
        });
});




