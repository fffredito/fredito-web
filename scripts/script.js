
// LANDING INTO MAIN CONTENT
// const enterButton = document.getElementById("enter");
// const landingSection = document.getElementById("landing-content");
// const contentSection = document.getElementById("main-grid");

// enterButton.addEventListener("click", () => {
//   landingSection.style.display = "none";
//   contentSection.style.display = "flex";
// });

// // Load more content button
// let loadMoreBtn = document.querySelector("#load-more");
// let currentItem = 6;

// loadMoreBtn.onclick = () => {
//   let boxes = [...document.querySelectorAll(".prj-item")];
//   for (var i = currentItem; i < currentItem + 6 && i < boxes.length; i++) {
//     boxes[i].style.display = "inline-block";
//   }
//   currentItem += 6;

//   if (currentItem >= boxes.length) {
//     loadMoreBtn.style.display = "none";
//   }
// };

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
    const videos = document.querySelectorAll(".video");

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

// Header language change
const englishHeader = document.getElementById("english-header");
const spanishHeader = document.getElementById("spanish-header");

englishHeader.addEventListener("click", () => {
  englishHeader.classList.add("hidden");
  spanishHeader.classList.remove("hidden");
});

spanishHeader.addEventListener("click", () => {
  spanishHeader.classList.add("hidden");
  englishHeader.classList.remove("hidden");
});



// PRJ DETAILS TRANSLATION
const enDetails = document.getElementById("prj-details-en");
const spDetails = document.getElementById("prj-details-sp");

enDetails.addEventListener("click", () => {
  enDetails.classList.add("hidden");
  spDetails.classList.remove("hidden");
});

spDetails.addEventListener("click", () => {
  spDetails.classList.add("hidden");
  enDetails.classList.remove("hidden");
});


// CURSOR EFFECT
document.addEventListener("DOMContentLoaded", () => {
  const cursorText = document.getElementById("cursorText");
  let timer;

  // Adjust the threshold for mobile detection as needed
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    document.addEventListener("mousemove", (e) => {
      const isOverVideo = e.target instanceof HTMLVideoElement; // Check if the cursor is over a video element

      if (!isOverVideo) {
        // Display cursorText and move it with the cursor
        cursorText.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        clearTimeout(timer);
        cursorText.style.display = "none"; // Hide cursorText initially

        timer = setTimeout(() => {
          cursorText.style.display = "block"; // Show cursorText after a delay
        }, 1200); // Adjust the timeout (in milliseconds) as needed
      } else {
        clearTimeout(timer);
        cursorText.style.display = "none"; // Hide cursorText when over a video element
      }
    });

    // Adjust cursorText position when the page is scrolled
    window.addEventListener("scroll", () => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      cursorText.style.left = `${scrollX}px`;
      cursorText.style.top = `${scrollY}px`;
    });
  }
});

// ESTABLISH SAFARI BROWSER USER
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// DISABLE VIDEO BG FOR SAFARI
if (isSafari()) {
  const bgVideo = document.getElementById('bgVideo');
  bgVideo.style.display = 'none'; // Hide the video on Safari
}

// SHOW BG IMAGE INSTEAD OF VIDEO ON SAFARI
if (isSafari()) {
  const carouselContainer = document.getElementById("carouselContainer");
  carouselContainer.innerHTML = `
      <div class="carousel-image" style="background-image: url('/assets/images/scanned-img/flower-1.jpg');"></div>
      <div class="carousel-image" style="background-image: url('/assets/images/scanned-img/tree-1.jpg');"></div>
      <div class="carousel-image" style="background-image: url('/assets/images/scanned-img/tree-2.jpg');"></div>
    `;

  const images = carouselContainer.querySelectorAll(".carousel-image");
  const bgVideo = document.getElementById("bgVideo");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.style.opacity = "1";
      } else {
        image.style.opacity = "0";
      }
    });
    bgVideo.style.display = "none";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 9000); // Change image every 9 seconds
} else {
  // Handle other browsers or provide a fallback
  console.log("This feature is only supported on Safari.");
}
