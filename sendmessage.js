function sendMessage() {
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Prepare the HTML content
    const htmlContent = `
        <h1>Hi Tejesh, Message from ${name}, they want to contact you about the service. The below are the details of the customer, please have a look and contact them.</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Send email using EmailJS
    emailjs.send("service_4tvx3vj","template_ehxo6gc",{
        message: htmlContent,
        })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Your message has been sent successfully!");
    }, function(error) {
        console.log('FAILED...', error);
        alert("Failed to send your message. Please try again later.");
    });
}