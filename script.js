
document.addEventListener("DOMContentLoaded", function() {
    const mobileImage = document.getElementById('mobile-image');
    const mobileVideo = document.getElementById('mobile-video');

    mobileImage.addEventListener('mouseenter', function() {
        mobileVideo.play();
    });

    mobileImage.addEventListener('mouseleave', function() {
        mobileVideo.pause();
        mobileVideo.currentTime = 0; // Reset video to the beginning when paused
    });
});


// swipe meny hamberger

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', function () {
        mobileMenu.style.display = 'block';
        menuBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        mobileMenu.style.display = 'none';
        menuBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });
});

// toggleMenu

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
});

// sticky navba
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// random image / Unsplash API
async function getRandomImageUrl() {
    try {
        const response = await fetch('https://source.unsplash.com/random/50x50/?face people ');
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }
        return response.url; // Return random image
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}
// Replace profile picture 
async function replaceProfilePictures() {
    var profilePics = document.querySelectorAll('.profile-pic');
    for (let i = 0; i < profilePics.length; i++) {
        var randomImageUrl = await getRandomImageUrl();
        if (randomImageUrl) {
            profilePics[i].style.backgroundImage = 'url(' + randomImageUrl + ')';
        }
    }
}

replaceProfilePictures();
