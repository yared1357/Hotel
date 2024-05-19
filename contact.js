function sendMail(){
   let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("message").value,
    };

   emailjs.send("service_7glp2ix","template_72hq5wk",parms).then(alert("Email sent sucessfully!"));

}
