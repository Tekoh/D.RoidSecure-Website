
//Scroll Check Function

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('div');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < windowHeight * 0.8 && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});


// Setting Active Page Local Function

document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    const navItems = {
        '/assets/pages/plans.html': 'Plans',
        '/assets/pages/products.html': 'Products',
        '/assets/pages/services.html': 'Services',
        '/assets/pages/about-us.html': 'AboutUs',
        '/assets/pages/contact-us.html': 'ContactUs'
    };

    if (navItems[currentPath]) {
        const navElement = document.getElementById(navItems[currentPath]);
        if (navElement) {
            navElement.classList.add('active');
        }
    }
});

// Dark Mode Toggle Function

const toggleButton = document.getElementById('theme-toggle');
const DRoidBody = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
    DRoidBody.classList.add('dark-mode');
}
toggleButton.addEventListener('click', () => {
    DRoidBody.classList.toggle('dark-mode');

    if (DRoidBody.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
});

// Dark Mode System Auto Function

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    DRoidBody.classList.add('dark-mode');
}

