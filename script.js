const cursorSmall = document.querySelector('.small');

const positionElement = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Adjust for scroll position
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  cursorSmall.style.transform = `translate3d(${mouseX + scrollX}px, ${mouseY + scrollY}px, 0)`;
}

window.addEventListener('mousemove', positionElement);


// VIDEO LOOPS ON HOVER
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".video");

    videos.forEach((video) => {
        video.addEventListener("mouseenter", function () {
            video.play();
        });

        video.addEventListener("mouseleave", function () {
            video.pause();
        });
    });

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Function to check if an element is in the viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to handle video play/pause based on viewport visibility
        function handleVideoPlayback() {
            videos.forEach((video) => {
                if (isInViewport(video)) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }

        // Initial check when DOM content is loaded
        handleVideoPlayback();

        // Event listener for scroll events
        window.addEventListener("scroll", handleVideoPlayback);
        videos.autoplay = true;
    }
});

let idleTimer;
let messageTimer;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;

    // Check if the cursor is over an element with the specified class
    if (!event.target.closest('.content__vis--grid__item')) {
        resetIdleTimer();
    } else {
        clearTimeout(idleTimer);
        clearTimeout(messageTimer);
        document.getElementById('idleMessage').style.display = 'none';
    }
});

function showIdleMessage() {
    // Only show the message if the window width is more than 800px
    if (window.innerWidth > 800) {
        const idleMessage = document.getElementById('idleMessage');
        idleMessage.style.left = (cursorX + 10) + 'px'; // Positioning the message 10px right of the cursor
        idleMessage.style.top = (cursorY + 10) + 'px'; // Positioning the message 10px below the cursor
        idleMessage.style.display = 'block';
        messageTimer = setTimeout(() => {
            idleMessage.style.display = 'none';
        }, 5000); // Hide the message after 5 seconds
    }
}

function resetIdleTimer() {
    clearTimeout(idleTimer);
    clearTimeout(messageTimer);
    document.getElementById('idleMessage').style.display = 'none';
    idleTimer = setTimeout(showIdleMessage, 1000); // Show the message after 1 second of inactivity
}

// Initialize the timer
resetIdleTimer();


const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

menuToggle.addEventListener('click', function() {
  const isOpen = menuList.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
});