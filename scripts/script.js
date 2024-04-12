const originalMarquee = document.getElementById("marqueeText");
const marqueeContainer = document.getElementById("marqueeContainer");

function duplicateMarquee() {
    // Clone the original marquee text
    const clonedMarquee = originalMarquee.cloneNode(true);
    // Append the cloned marquee after the last marquee
    marqueeContainer.appendChild(clonedMarquee);
}

// Duplicate the marquee 4 times
for (let i = 0; i < 4; i++) {
    duplicateMarquee();
}


// Landing into main content
const enterButton = document.getElementById('enter');
const landingSection = document.querySelector('.landing');
const contentSection = document.getElementById('base-grid');

enterButton.addEventListener('click', () => {
    landingSection.style.display = 'none';
    contentSection.style.display = 'flex';
});

// Load more content button
let loadMoreBtn = document.querySelector('#load-more')
let currentItem = 6;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.prj-item')];
    for (var i = currentItem; i < currentItem + 6 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 6;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }

};

document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
        video.addEventListener('mouseenter', function () {
            video.play();
        });

        video.addEventListener('mouseleave', function () {
            video.pause();
        });
    });
});


const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    const videos = document.querySelectorAll('.video');
    videos.forEach(video => {
        video.setAttribute('playsinline', '');
        video.setAttribute('muted', '');
    });
}

// Header language change
const englishHeading = document.getElementById('english-header');
const spanishHeading = document.getElementById('spanish-header');

englishHeading.addEventListener('click', () => {
    englishHeading.classList.add('hidden');
    spanishHeading.classList.remove('hidden');
});

spanishHeading.addEventListener('click', () => {
    spanishHeading.classList.add('hidden');
    englishHeading.classList.remove('hidden');
});

// Landing header
const englishLanding = document.getElementById('landing-banner-en');
const spanishLanding = document.getElementById('landing-banner-sp');

englishLanding.addEventListener('click', () => {
    englishLanding.classList.add('hidden');
    spanishLanding.classList.remove('hidden');
});

spanishLanding.addEventListener('click', () => {
    spanishLanding.classList.add('hidden');
    englishLanding.classList.remove('hidden');
});

// Mobile project images
// if (window.innerWidth > 768) {
//     const projectImage = document.getElementsByClassName('prj-img');

//     projectImage.addEventListener('play', () => {
//         projectImage.classList.add('hidden');
//     });

//     const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

//     if (isSafari) {
//         const videos = document.querySelectorAll('.video');
//         videos.forEach(video => {
//             video.setAttribute('playsinline', '');
//             video.setAttribute('muted', '');
//             video.setAttribute('autoplay', '');
//         });
//     }
// }


// CURSOR EFFECT
document.addEventListener("DOMContentLoaded", () => {
    const cursorText = document.getElementById("cursorText");
    let timer;

    const isMobile = window.innerWidth <= 768; // Adjust the threshold as needed for mobile detection

    if (!isMobile) {
        document.addEventListener("mousemove", (e) => {
        // Check if the cursor is over a video element
        const isOverVideo = e.target instanceof HTMLVideoElement;
    
        if (!isOverVideo) {
            cursorText.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    
            clearTimeout(timer);
            cursorText.style.display = "block";
    
            timer = setTimeout(() => {
            cursorText.style.display = "none";
            }, 1000); // Adjust the timeout (in milliseconds) as needed
        } else {
            cursorText.style.display = "none"; // Hide text when over a video element
        }

        window.addEventListener("scroll", () => {
            const scrollX = window.pageXOffset;
            const scrollY = window.pageYOffset;
      
            cursorText.style.left = `${scrollX}px`;
            cursorText.style.top = `${scrollY}px`;
          });
        });
    }
});
  
  