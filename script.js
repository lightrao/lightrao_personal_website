document.addEventListener('DOMContentLoaded', function() {
    const enBtn = document.getElementById('lang-en-btn');
    const zhBtn = document.getElementById('lang-zh-btn');
    const body = document.body;
    const htmlElement = document.documentElement;

    // Get modal elements
    const modal = document.getElementById('imageModal');
    const avatarImg = document.getElementById('avatarImg');
    const fullImage = document.getElementById('fullImage');
    const closeModal = document.querySelector('.close-modal');

    // Open the modal when clicking the avatar
    if (avatarImg && modal && fullImage) {
        avatarImg.addEventListener('click', function() {
            modal.style.display = 'block';
            fullImage.src = this.src;
        });
    }

    // Close the modal when clicking the X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close the modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Function to set the language
    function setLanguage(lang) {
        // Update body class
        body.classList.remove('lang-en-active', 'lang-zh-active');
        body.classList.add(`lang-${lang}-active`);

        // Update html lang attribute
        htmlElement.setAttribute('lang', lang);

        // Update button active state
        enBtn.classList.toggle('active', lang === 'en');
        zhBtn.classList.toggle('active', lang === 'zh');

        // Update page title
        const titles = document.querySelectorAll(`title.lang-${lang}`);
        if (titles.length > 0) {
            document.title = titles[0].innerText;
        }

        // Optional: Store preference in localStorage
        localStorage.setItem('preferredLanguage', lang);
    }

    // Event Listeners for buttons
    enBtn.addEventListener('click', () => {
        if (!enBtn.classList.contains('active')) {
            setLanguage('en');
        }
    });

    zhBtn.addEventListener('click', () => {
        if (!zhBtn.classList.contains('active')) {
            setLanguage('zh');
        }
    });

    // Set initial language based on localStorage or default to English
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    if (preferredLanguage === 'zh') {
        setLanguage('zh');
    } else {
        setLanguage('en'); // Default to English
    }

    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});