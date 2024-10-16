// profile.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get values from the input fields
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Simple validation
      if (!name || !email || !phone || !password) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Mock submission
      alert(`Profile updated:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPassword: ${password}`);
  
      // Reset the form
      form.reset();
    });
  });
  