const nav = document.querySelector('.nav');
const featureCards = document.querySelectorAll('.feature-card');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');

const featuresData = {
    '1': {
        title: 'Comprehensive Hub',
        description: 'Here we have the home page which serves as a hub for everyone. You can see all webtoons in card format which you can click on for more information.',
        image: './images/Home.png'
    },
    '2': {
        title: 'Advanced Search',
        description: 'Here we have the advanced search page to allow users to search by chapter count, rating, title, author, etc.',
        image: './images/Search.png'
    },
    '3': {
        title: 'Personal Library',
        description: 'Here we have the library - a page allowing connected users to see webtoons they have read / are reading / have finished. By clicking on the card they can also access more information and edit content only they have access to.',
        image: './images/Library.png'
    },
    '4': {
        title: 'Create & Contribute',
        description: 'Here is the webtoon creation page allowing you to create a webtoon that is not present on the site. This is useful for new releases or little-known works, and these saved webtoons will be private.',
        image: './images/Create.png'
    },
    '5': {
        title: 'Admin Moderation',
        description: 'Here is the page for administrators. Webtoon creators who want to make their metadata public will need to make a request that will be reviewed and accepted by an administrator (avoiding inappropriate content or links, etc.)',
        image: './images/Admin.png'
    },
    '6': {
        title: 'Rich Metadata',
        description: 'Detailed information at your fingertips. Access comprehensive metadata, ratings, chapter counts, author details, and community reviews.',
        image: './images/Data.png'
    }
};

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

featureCards.forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);

    card.addEventListener('click', () => {
        const featureId = card.getAttribute('data-feature');
        const data = featuresData[featureId];

        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalImage.src = data.image;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

document.querySelectorAll('.cta-btn, .nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 200);
    });
});