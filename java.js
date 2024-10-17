const baseURL = 'http://localhost:8080/api'; // Adjust according to your backend

// Registration
document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${baseURL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        alert('User registered successfully!');
    } else {
        alert('Registration failed!');
    }
});

// Create Ride
document.getElementById('rideForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const departureLocation = document.getElementById('departureLocation').value;
    const destination = document.getElementById('destination').value;
    const departureTime = document.getElementById('departureTime').value;

    const response = await fetch(`${baseURL}/rides`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ departureLocation, destination, departureTime }),
    });

    if (response.ok) {
        alert('Ride created successfully!');
    } else {
        alert('Failed to create ride!');
    }
});

// Book Ride
document.getElementById('bookRideButton').addEventListener('click', async () => {
    const rideId = document.getElementById('rideId').value;

    const response = await fetch(`${baseURL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rideId: rideId, userId: 1, status: 'CONFIRMED' }), // Replace userId with actual logged-in user ID
    });

    if (response.ok) {
        alert('Ride booked successfully!');
    } else {
        alert('Failed to book ride!');
    }
    console.log(response);
});
