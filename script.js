document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
     const name = e.target.name.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
     const confirmation = document.getElementById('confirmation-message');
    confirmation.textContent = `Tack ${name}, din bokning den ${date} har skickats. Vi kontaktar dig via ${email}.`;
    confirmation.style.display = 'block';
     e.target.reset();
 
 
    document.getElementById("booking-form").addEventListener("submit", function (e) {
        e.preventDefault();
     
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
     
        const confirmation = document.getElementById("confirmation-message");
        confirmation.textContent = `Tack ${name}, din bokning för den ${date} har tagits emot!`;
        confirmation.style.display = "block";
     
        e.target.reset();
      });
   
 emailjs.init(xMAXP3Xz-KK5IIGQt);
 
 
 document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();
 
 
  emailjs.sendForm(service_fx6ik14, template_v1pp2yj, this)
    .then(function () {
      document.getElementById("confirmation-message").textContent = "Tack! Din bokning har skickats.";
      document.getElementById("confirmation-message").style.display = "block";
      e.target.reset();
    }, function (error) {
      document.getElementById("confirmation-message").textContent = "Något gick fel. Försök igen.";
      document.getElementById("confirmation-message").style.color = "red";
      document.getElementById("confirmation-message").style.display = "block";
      console.error("Error:", error);
    });
 });
 
 
     
  });
 