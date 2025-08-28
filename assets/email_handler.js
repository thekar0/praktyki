const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload
  sendMail();         // call your EmailJS function
});

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_1eoipdn", "template_05cn38a", params)
        .then(() => {
            document.getElementById("contactForm").reset(); // reset form
        })
        .catch(err => console.error(err));
}
