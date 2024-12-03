// Sample data for skills
const skills = [
    { id: 1, title: 'Cooking', description: 'Learn the art of cooking from experienced chefs.', image: 'https://via.placeholder.com/350x200' },
    { id: 2, title: 'Coding', description: 'Master programming languages and build amazing projects.', image: 'https://via.placeholder.com/350x200' },
    { id: 3, title: 'Painting', description: 'Express yourself through various painting techniques.', image: 'https://via.placeholder.com/350x200' },
    { id: 4, title: 'Photography', description: 'Capture stunning moments with professional photography skills.', image: 'https://via.placeholder.com/350x200' },
    { id: 5, title: 'Yoga', description: 'Improve your physical and mental well-being through yoga.', image: 'https://via.placeholder.com/350x200' },
    { id: 6, title: 'Guitar', description: 'Learn to play the guitar and create beautiful music.', image: 'https://via.placeholder.com/350x200' },
];

// Function to create a skill card
function createSkillCard(skill) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${skill.image}" class="card-img-top" alt="${skill.title}">
                <div class="card-body">
                    <h5 class="card-title">${skill.title}</h5>
                    <p class="card-text">${skill.description}</p>
                    <a href="skill-detail.html?id=${skill.id}" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    `;
}

// Function to populate skills grid
function populateSkillsGrid() {
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = skills.map(skill => createSkillCard(skill)).join('');
    }
}

// Function to display skill detail
function displaySkillDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const skillId = parseInt(urlParams.get('id'));
    const skill = skills.find(s => s.id === skillId);

    if (skill) {
        const skillDetail = document.getElementById('skill-detail');
        skillDetail.innerHTML = `
            <h1>${skill.title}</h1>
            <img src="${skill.image}" alt="${skill.title}" class="img-fluid mb-4">
            <p>${skill.description}</p>
            <h2>Upcoming Sessions</h2>
            <ul class="list-group">
                <li class="list-group-item">
                    <strong>Introduction to ${skill.title}</strong><br>
                    Date: June 15, 2023<br>
                    Time: 2:00 PM - 4:00 PM<br>
                    <button class="btn btn-primary mt-2">Sign Up</button>
                </li>
                <li class="list-group-item">
                    <strong>Advanced ${skill.title} Techniques</strong><br>
                    Date: June 22, 2023<br>
                    Time: 3:00 PM - 5:00 PM<br>
                    <button class="btn btn-primary mt-2">Sign Up</button>
                </li>
            </ul>
        `;
    }
}

// Function to populate dashboard
function populateDashboard() {
    const learningSkills = document.getElementById('learning-skills');
    const teachingSkills = document.getElementById('teaching-skills');

    if (learningSkills && teachingSkills) {
        learningSkills.innerHTML = skills.slice(0, 3).map(skill => createSkillCard(skill)).join('');
        teachingSkills.innerHTML = skills.slice(3, 6).map(skill => createSkillCard(skill)).join('');
    }
}

// Function to initialize Google Map
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 13
    });

    const marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 },
        map: map,
        title: 'SkillConnect HQ'
    });
}

// Event listener for contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Call functions based on the current page
    if (window.location.pathname.includes('skills.html')) {
        populateSkillsGrid();
    } else if (window.location.pathname.includes('skill-detail.html')) {
        displaySkillDetail();
    } else if (window.location.pathname.includes('dashboard.html')) {
        populateDashboard();
    }
});

// Make initMap function global for Google Maps API
window.initMap = initMap;

