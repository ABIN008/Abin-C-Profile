function downloadResume() {
  window.location.href =
    "https://drive.google.com/file/d/1JflZcoRImQd5RrEyJlKq6IKtoDI5NBot/view?usp=sharing";
}


(function () {
  emailjs.init("g7bg6vN2A5y2HkIic"); // Replace with your EmailJS public key
})();

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Create an object to hold the form data
    const formData = new FormData(this);
    const emailParams = {
      from_name: formData.get("user_name"), // Replace 'name' with your input name
      from_email: formData.get("user_email"), // Replace 'email' with your input name
      message: formData.get("message"),
      subject: formData.get("subject"), // Replace 'message' with your input name
    };
    console.log("emailparams",emailParams);
    

    // Send the email using EmailJS
    emailjs.send("service_lcq23d8", "template_gowf34n", emailParams).then(
      function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Reset the form
      },
      function (error) {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS Error: ", error);
      }
    );
  });
