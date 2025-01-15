//------------------------------------------------
// 0) FOLDER PATH & IMAGE LIST
//------------------------------------------------
// If your folder is literally "images" at the same level as index.html:
const folderPath = ''; 
// We included the "images/" in each array entry above, so we can keep folderPath empty.

let images = [
  // PASTE the revised array from above HERE
  "images/IMG_4474.JPG",
  "images/photo1.JPG",
  // ...
  "images/IMG_5236.JPG"
];

//------------------------------------------------
// 1) PATTERNS (1 → 2 → 3 images per row, repeated)
//------------------------------------------------
const sizes = {
  small:  { width: 15, height: 15 },
  medium: { width: 30, height: 30 },
  large:  { width: 55, height: 55 }
};

const patternSequence = [
  {
    sizeKeys: ["large"],                      // 1 image (large)
    xPositions: [(100 - sizes.large.width)/2] // center horizontally
  },
  {
    sizeKeys: ["medium", "medium"],           // 2 images (medium)
    xPositions: [5, 55]
  },
  {
    sizeKeys: ["small", "small", "small"],    // 3 images (small)
    xPositions: [5, 30, 55]
  }
];

// We'll rotate through these patterns in order
let patternIndex = 0;

//------------------------------------------------
// 2) ANIMATION CONFIG
//------------------------------------------------
const scrollSpeed = 18;       // how fast images move up
const spawnInterval = 900;    // ms between spawning rows
let currentOffset = 0;        // vertical offset for next row
const verticalGap = 4;        // extra spacing after each row

//------------------------------------------------
// 3) INITIALIZE
//------------------------------------------------
let spawnTimer;

document.addEventListener('DOMContentLoaded', () => {
  spawnTimer = setInterval(createRowInSequence, spawnInterval);
  attachScrollFreeze(700);
  attachImageZoomLogic();
});

//------------------------------------------------
// 4) CREATE ROW IN STRICT ARRAY ORDER
//------------------------------------------------
function createRowInSequence() {
  // If no images remain, stop
  if (images.length === 0) {
    clearInterval(spawnTimer);
    return;
  }

  // Get the current pattern in the sequence (1→2→3→1→2→3)
  const pattern = patternSequence[patternIndex % patternSequence.length];
  patternIndex++;

  const container = document.getElementById('floating-container');
  let maxHeight = 0;

  // For each image "slot" in the pattern
  pattern.sizeKeys.forEach((sizeKey, i) => {
    // If we run out of images mid-pattern, just skip
    if (images.length === 0) return;

    // Take the next image in EXACT order
    const imageName = images.shift();

    // Dimensions
    const { width, height } = sizes[sizeKey];
    if (height > maxHeight) maxHeight = height;

    // Create the <img> element
    const imgEl = document.createElement('img');
    imgEl.classList.add('floating-image');
    // Build the src.  The array entry already has "images/filename" in it, 
    // so folderPath may be empty. If you remove "images/" from the array, then do:
    // imgEl.src = folderPath + encodeURIComponent(imageName);
    imgEl.src = imageName; 

    // Set sizing
    imgEl.style.width  = `${width}vw`;
    imgEl.style.height = `${height}vh`;

    // Horizontal position
    const xPos = pattern.xPositions[i];
    imgEl.style.left = `${xPos}vw`;

    // Vertical "spawn" position
    const spawnY = 100 + currentOffset;
    imgEl.style.top = `${spawnY}vh`;

    // Append to container
    container.appendChild(imgEl);

    // Animate upwards
    const totalDistance = spawnY + height;
    const duration = totalDistance / scrollSpeed;
    gsap.to(imgEl, {
      y: `-=${totalDistance}vh`,
      duration,
      ease: 'linear'
    });
  });

  // Increase offset by the tallest image in this pattern plus gap
  currentOffset += maxHeight + verticalGap;
}

//------------------------------------------------
// 5) SCROLL FREEZE
//------------------------------------------------
function attachScrollFreeze(delayMs) {
  let scrollTimeout = null;

  window.addEventListener('scroll', () => {
    gsap.globalTimeline.pause();
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      gsap.globalTimeline.resume();
    }, delayMs);
  });
}

//------------------------------------------------
// 6) IMAGE ZOOM
//------------------------------------------------
function attachImageZoomLogic() {
  // Show zoom on click
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('floating-image')) {
      showZoom(evt.target);
    }
  });
  // Hide zoom on overlay click
  const overlay = document.getElementById('zoom-overlay');
  overlay.addEventListener('click', (evt) => {
    if (evt.target.id === 'zoom-overlay') {
      hideZoom();
    }
  });
}

function showZoom(originalImg) {
  const overlay     = document.getElementById('zoom-overlay');
  const zoomedImage = document.getElementById('zoomed-image');

  zoomedImage.src = originalImg.src;
  overlay.style.display = 'flex';
  gsap.globalTimeline.timeScale(0.5);
}

function hideZoom() {
  const overlay = document.getElementById('zoom-overlay');
  overlay.style.display = 'none';
  gsap.globalTimeline.timeScale(1);
}

