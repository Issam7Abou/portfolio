function sendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "",
    Password : "",
    To : "",
    From : document.getElementById('email').value,
    Subject : "New Form send successfully",
    Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}