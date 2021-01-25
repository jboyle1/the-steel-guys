function sendMail(params) {
    let tempParams = {
        from_name: document.getElementById("fromName").value,
        from_email: document.getElementById("fromEmail").value,
        from_phone: document.getElementById("fromPhone").value,
        msg: document.getElementById("msg").value
    };

    emailjs.send('service_antdaxw', 'template_ml6y7wx', tempParams)
    .then(function(res){
        console.log('Success', res.status)
        alert('Message was sent successfully', res.status)
    })
}