// Fetch Testimonials from RandomUser API
async function fetchTestimonials() {
    const response = await fetch('https://randomuser.me/api/?results=3');
    const data = await response.json();
    return data.results;
}

// Array of different testimonial texts
const testimonialMessages = [
    "This developer did an amazing job! Highly recommend.",
    "Superb attention to detail and excellent communication.",
    "Delivered the project on time and exceeded expectations!",
    "A creative and reliable professional. Great experience!",
    "Extremely knowledgeable and a pleasure to work with.",
    "Top-notch coding skills and very responsive to feedback."
];

// Function to get a random testimonial message
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * testimonialMessages.length);
    return testimonialMessages[randomIndex];
}

// Create a Testimonial Card
function createTestimonial(user) {
    const testimonial = document.createElement('div');
    testimonial.classList.add('testimonial');

    // Get a random testimonial message
    const testimonialMessage = getRandomMessage();

    testimonial.innerHTML = `
        <img src="${user.picture.medium}" alt="${user.name.first}" />
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>"${testimonialMessage}"</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `;

    return testimonial;
}

// Load Testimonials and Append to DOM
async function loadTestimonials() {
    const testimonialsContainer = document.getElementById('testimonial-container');
    const testimonials = await fetchTestimonials();
    
    testimonials.forEach(user => {
        const testimonialCard = createTestimonial(user);
        testimonialsContainer.appendChild(testimonialCard);
    });
}

// Event Listener for "Load More" Button
document.getElementById('load-more').addEventListener('click', loadTestimonials);

// Initial Load
window.onload = loadTestimonials;
