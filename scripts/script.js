document.addEventListener("DOMContentLoaded", function () {
  const cursorText = document.querySelector(".cursor-text");
  let timer;

  function showCursorText() {
    cursorText.style.display = "block";
    clearTimeout(timer);
  }

  function hideCursorText() {
    cursorText.style.display = "none";
    clearTimeout(timer);
  }

  function isCursorActive() {
    return document.activeElement === document.body;
  }

  document.addEventListener("mousemove", function () {
    if (isCursorActive()) {
      showCursorText();
      timer = setTimeout(hideCursorText, 2000); // 2-second delay before hiding
    } else {
      hideCursorText();
    }
  });

  document.addEventListener("mouseleave", function () {
    showCursorText();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cursorObject = document.getElementById("cursorText");
  let timer;

  function isCursorOverVideo(e) {
    const element = document.elementFromPoint(e.clientX, e.clientY);
    return element.tagName === "VIDEO";
  }

  document.addEventListener("mousemove", function (e) {
    clearTimeout(timer); // Clear any existing timer
    if (!isCursorOverVideo(e)) {
      timer = setTimeout(() => {
        cursorObject.style.display = "block";
        cursorObject.style.left = e.clientX + "px";
        cursorObject.style.top = e.clientY + "px";
      }, 1000); // Delay of 500 milliseconds (0.5 seconds)
    } else {
      cursorObject.style.display = "none";
    }
  });

  document.addEventListener("mouseleave", function () {
    cursorObject.style.display = "none";
  });
});

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

// SHOW BG IMAGE INSTEAD OF VIDEO ON SAFARI
// Check if the browser is Safari
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// If the browser is Safari, add the fallback image before the video
if (isSafari()) {
  const videoElement = document.getElementById("videoElement");
  const fallbackImage = new Image();
  fallbackImage.src = "path/to/your/fallback-image.jpg"; // Replace with the path to your fallback image
  fallbackImage.alt = "Fallback Image";
  fallbackImage.style.display = "none"; // Hide the image initially
  videoElement.parentNode.insertBefore(fallbackImage, videoElement);

  // Pause the video and show the fallback image
  videoElement.style.display = "none";
  fallbackImage.style.display = "block";
}

// ---------------------- ABOUT LINK SCROLL DOWN
function scrollToAbout(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ---------------------- VIS LINK SCROLL UP ------------------
document.getElementById("vis").addEventListener("click", function (event) {
  event.preventDefault(); // Prevents the default behavior of the link
  var targetElement = document.getElementById("targetElement");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
});

// ---------------------- GO TO IMAGES / AND BACK -------------
function toggleImgs() {
  var div1 = document.getElementById("content");
  var div2 = document.getElementById("images");
  var div3 = document.getElementById("mobileMenu");

  if (div1.style.display === "none") {
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
  } else {
    div1.style.display = "none";
    div2.style.display = "block";
    div3.style.display = "none";
  }
}

function toggleVis() {
  var bio = document.getElementById("bioHeader");
  var vis = document.getElementById("visContainer");
  var menu = document.getElementById("mobileMenu");
  var contact = document.getElementById("socialContainer");

  if (vis.style.display === "none" || vis.style.display === "") {
    bio.style.display = "none";
    vis.style.display = "block";
    menu.style.display = "none";
    contact.style.display = "none";
  } else {
    vis.style.display = "none";
    bio.style.display = "block";
    menu.style.display = "block";
    contact.style.display = "block";
  }
}

function toggleAbout() {
  var bio = document.getElementById("bioHeader");
  var about = document.getElementById("aboutContainer");
  var menu = document.getElementById("mobileMenu");
  var contact = document.getElementById("socialContainer");

  if (about.style.display === "none" || about.style.display === "") {
    bio.style.display = "none";
    about.style.display = "block";
    menu.style.display = "none";
    contact.style.display = "none";
  } else {
    about.style.display = "none";
    bio.style.display = "block";
    menu.style.display = "block";
    contact.style.display = "block";
  }
}


function goBack() {
  var div1 = document.getElementById("content");
  var div2 = document.getElementById("images");

  if (window.innerWidth <= 760) {
    div1.style.display = "flex";
  } else {
    div1.style.display = "grid";
  }
  div2.style.display = "none";
}

