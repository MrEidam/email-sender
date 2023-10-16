function sendMail(){
    (function(){
        emailjs.init("_o-DnIdLgyXHQgMDz");
    })();

    let params ={
        sendername: document.getElementById('sendername').value,
        to: document.getElementById('to').value,
        subject: document.getElementById('subject').value,
        replyto: document.getElementById('replyto').value,
        message: document.getElementById('message').value,
    };

    const serviceID = 'service_uiuelcc';
    const templateID = 'template_07ndfzc';

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        alert('Email Successfully!')
    })
    .catch();
}