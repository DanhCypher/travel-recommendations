// Function to handle form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (email && message) {
        alert(`Thank you for reaching out! We have received your message:\n\n"${message}"\n\nWe will contact you at ${email} soon.`);
        form.reset(); // Clear the form fields
      } else {
        alert('Please fill out all fields before submitting.');
      }
    });
  }
});