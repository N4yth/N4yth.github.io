const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const featureCards = document.querySelectorAll('.feature-card');

const featureDetails = {
    1: {
        title: 'Comprehensive Hub',
        description: `Our webtoon hub is your gateway to discovering thousands of titles.
        Click any webtoon card to explore synopsis, author information, genre tags, community ratings, and reading links.`,
        image: './images/Home.png'
    },
    2: {
        title: 'Advanced Search',
        description: `Find your perfect webtoon with our powerful search system.
        Our intelligent search algorithm ensures you discover exactly what you're looking for, whether it's a completed series or an ongoing adventure.`,
        image: './images/Search.png'
    },
    3: {
        title: 'Personal Library',
        description: `Take control of your reading journey with our comprehensive library system.
        Your library syncs across all devices, so you never lose track of where you left off.`,
        image: './images/Library.png'
    },
    4: {
        title: 'Create & Contribute',
        description: `Be part of our growing database by adding new webtoons.
        Can't find your favorite webtoon? Add it! Help other readers discover hidden gems and contribute to our community-driven database.`,
        image: './images/Create.png'
    },
    5: {
        title: 'Admin Moderation',
        description: `Quality and safety are our top priorities.
        Our dedicated moderation team reviews all submissions to maintain a safe, high-quality environment for all users.`,
        image: './images/Admin.png'
    },
    6: {
        title: 'Rich Metadata',
        description: `Access comprehensive information for every webtoon.
        Make informed decisions about what to read next with all the information you need at your fingertips.`,
        image: './images/Data.png'
    }
};

featureCards.forEach(card => {
    card.addEventListener('click', () => {
        const featureId = card.getAttribute('data-feature');
        const details = featureDetails[featureId];

        modalTitle.textContent = details.title;
        modalDescription.textContent = details.description;
        modalImage.src = details.image;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

const ctaButtons = document.querySelectorAll('.cta-btn');
const navBtn = document.querySelector('.nav-btn');

ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("website not accessible please re-try later")
    });
});

if (navBtn) {
    navBtn.addEventListener('click', () => {
        window.location.href = '/signup';
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});
