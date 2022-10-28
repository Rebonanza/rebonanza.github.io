function sendEmail(){
    let params = {
        name: document.getElementById('name').value,
        subject: document.getElementById('subject').value,
        emailSender: document.getElementById('email').value,
        msg: document.getElementById('msg').value
    }

    const serviceId = "service_0itt63d"
    const templateId = "template_aztd7wd"

    email.send(serviceId,templateId,params)
    .then( result => {
        document.getElementById('name').value = ""
        document.getElementById('subject').value = ""
        document.getElementById('email').value = ""
        document.getElementById('msg').value = ""
        console.log(result)
        alert("Your Message Sent Successfully")
    })
    .catch( error => {
        alert(error)
    })
}


