let dialog = document.getElementById('confirm-dialog');
let input_name = document.getElementById('input-field-name');
let input_mail = document.getElementById('input-field-mail');
let input_message = document.getElementById('input-field-message');

function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('https://formspree.io/f/xjkvbzbz', {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
            Accept: 'application/json',
        },
    })
        .then(() => {
            window.location.href = './send_mail.html';
        })
        .catch((error) => {
            console.log(error);
        });
}
