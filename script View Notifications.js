// Array to hold notifications
let notifications = [];

// Function to display notifications
function displayNotifications() {
    const notificationsDiv = document.getElementById('notifications');
    notificationsDiv.innerHTML = ''; // Clear existing notifications

    if (notifications.length === 0) {
        notificationsDiv.innerHTML = '<p>No notifications.</p>';
        return;
    }

    notifications.forEach((notification, index) => {
        const notificationItem = document.createElement('div');
        notificationItem.className = 'notification-item';
        notificationItem.innerHTML = `
            <i class="fas fa-info-circle"></i>
            <span>${notification}</span>
            <button class="remove-btn" data-index="${index}">✖</button>
        `;
        notificationsDiv.appendChild(notificationItem);
    });

    // Re-add event listeners to remove buttons after rendering
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            removeNotification(index);
        });
    });
}

// Function to add a notification
function addNotification(message) {
    notifications.push(message);
    displayNotifications();
}

// Function to remove a notification by index
function removeNotification(index) {
    notifications.splice(index, 1); // Remove the notification from the array
    displayNotifications(); // Update the displayed notifications
}

// Function to clear all notifications
function clearNotifications() {
    notifications = []; // Clear the notifications array
    displayNotifications(); // Update the displayed notifications
}

// Event listener for the clear notifications button
document.getElementById('clear-notifications').addEventListener('click', clearNotifications);

// Example messages for automatic addition
const exampleMessages = [
    "New message from your friend!",
    "Don't forget to submit your report!",
    "New comment on your post!",
    "You have a new follower!",
    "Your profile has been updated."
];

// Function to automatically add notifications at intervals
function addAutomaticNotifications() {
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * exampleMessages.length);
        addNotification(exampleMessages[randomIndex]);
    }, 5000); // Change 5000 to the desired interval in milliseconds (5 seconds)
}

// Start adding automatic notifications
addAutomaticNotifications();

// Initial example notifications
addNotification("Welcome to the notification system!");
addNotification("Your settings have been saved.");
