document.getElementById('editProfileBtn').addEventListener('click', function() {
    // Replace the current details with editable input fields
    document.getElementById('accountName').innerHTML = '<input type="text" class="form-control" value="Ethan D\'souza">';
    document.getElementById('accountEmail').innerHTML = '<input type="email" class="form-control" value="tech.ethan.ds@gmail.com">';
    document.getElementById('accountPhone').innerHTML = '<input type="text" class="form-control" value="+1234567890">';
    document.getElementById('accountAddress').innerHTML = '<input type="text" class="form-control" value="techwithethan studios">';
    
    // Change the "Edit Profile" button to "Save Changes"
    document.getElementById('editProfileBtn').textContent = 'Save Changes';
    document.getElementById('editProfileBtn').classList.remove('btn-primary');
    document.getElementById('editProfileBtn').classList.add('btn-success');
  });

  document.getElementById('deleteAccountBtn').addEventListener('click', function() {
    // Confirm account deletion
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deleted.');
      // In real applications, add code here to handle account deletion
    }
  });