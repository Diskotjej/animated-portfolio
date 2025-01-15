//------------------------------------------------
// 1) PATH + IMAGE LIST (Correct Filenames)
//------------------------------------------------

// The folder is now named "images" (no space), at same level as index.html
const folderPath = './images/';

// Put your images here in the order you want them to appear.
// Each must match EXACTly a file in `images/`.
let images = [
  // Example partial list (make sure these really exist):
  "IMG_0745.JPG",       // must confirm the file is spelled like that
  "IMG_0823.jpg",
  "IMG_0832.jpg",
  "IMG_1160.jpg",
  "IMG_1164.jpg",
  "IMG_1168.jpg",
  "IMG_1178.jpg",
  "IMG_1197.jpg",
  "IMG_1215.jpg",
  "IMG_1219.jpg",
  "IMG_1384.png",
  "IMG_1648.jpg",
  "IMG_1679.jpg",
  "IMG_2568.jpg",
  "IMG_2578__29-04-2019-02-35-30.jpg",
  "IMG_2530_25-04-2019-19-43-53.jpg",
  "images_photo32.jpg",
  "images_photo35.jpg",
  "images_photo23.jpg",
  "IMG_6419.jpg",
  "IMG_4619.jpg",
  "IMG_1204.jpg",
  "IMG_9082.jpg",
  "IMG_6174.jpeg",
  "IMG_5668.jpg",
  "images_photo27.jpeg",
  "IMG_1185.jpg",
  "images_photo26.jpg",
  "IMG_4496.jpg",
  "IMG_1213.jpg",
  "IMG_7479.png",
  "IMG_1368.jpg",
  "IMG_4597.jpg",
  "IMG_6339.jpg",
  "IMG_1199.jpg",
  "IMG_4468.jpg",
  "IMG_4020.jpg",
  "IMG_2562.jpg",
  "IMG_6503.jpg",
  "IMG_8325.jpg",
  "IMG_2543.jpg",
  "IMG_1193.jpg",
  "images_photo6.jpg",
  "IMG_1202.jpg",
  "IMG_4440.jpg",
  "IMG_6337.jpg",
  "images_photo24.jpeg",
  "IMG_2524.jpg",
  "IMG_6010.jpg",
  "IMG_4410.jpg",
  "IMG_1440.jpg",
  "IMG_2547.jpg"
  // etc. 
  // (Add or remove items based on your final verified list.)
];

//------------------------------------------------
// 2) SIZES & PATTERNS
//------------------------------------------------

// We'll animate images in random "rows" with 1, 2, or 3 images each.
const sizes = {
  small:  { width: 15, height: 15 },
  medium: { width: 30, height: 30 },
  large:  { width: 55, height: 55 }
};

const patterns = [
  {
    sizeKeys: ["large"],
    xPositions: [(100 - sizes.large.width)/2]
  },
  {
    sizeKeys: ["medium","medium"],
    xPositions: [5,55]
  },
  {
    sizeKeys: ["small","small","small"],
    xPositions: [5,30,55]
  }
];

//------------------------------------------------
// 3) ANIMATION SETTINGS
//------------------------------------------------
const scrollSpeed = 18;  // how fast images move upward
const spawnInterval = 900; // ms between new rows
let currentOffset = 0;   // vertical offset as we spawn more rows
const verticalGap = 4;   // extra spacing between rows

//------------------------------------------------
// 4) INIT ON DOM READY
//------------------------------------------------
let spawnTimer;

document.addEventListener('DOMContentLoaded', initializeAnimation);

function initializeAnimation() {
  // Spawn new rows repeatedly
  spawnTimer = setInterval(createRandomRow, spawnInterval);

  // If you want to freeze animation while scrolling:
  attachScrollFreeze(700);

  // Zoom functionality:
  attachImageZoomLogic();
}

//------------------------------------------------
// 5) CREATE + ANIMATE A ROW
//------------------------------------------------
function createRandomRow() {
  // If we have no images left, stop
  if (images.length === 0) {
    clearInterval(spawnTimer);
    return;
  }

  // Pick a pattern at random
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  const container = document.getElementById('floating-container');

  let maxHeight = 0;

  pattern.sizeKeys.forEach((sizeKey, i) => {
    // If we run out mid-pattern, skip
    if (images.length === 0) return;

    // Take the next image from the front (no repeats)
    const filename = images.shift();

    const { width, height } = sizes[sizeKey];
    if (height > maxHeight) maxHeight = height;

    // Create <img> element
    const imgEl = document.createElement('img');
    imgEl.classList.add('floating-image');

    // Build final path. e.g. "./images/IMG_0823.jpg"
    imgEl.src = folderPath + encodeURIComponent(filename);

    // Set size
    imgEl.style.width  = width + 'vw';
    imgEl.style.height = height + 'vh';

    // Horizontal position from pattern
    const xPos = pattern.xPositions[i];
    imgEl.style.left = xPos + 'vw';

    // Vertical spawn position
    const spawnY = 100 + currentOffset;
    imgEl.style.top = spawnY + 'vh';

    container.appendChild(imgEl);

    // Animate upward with GSAP
    const totalDistance = spawnY + height;
    const duration = totalDistance / scrollSpeed;
    gsap.to(imgEl, {
      y: `-=${totalDistance}vh`,
      duration,
      ease: 'linear'
    });
  });

  // Increase vertical offset for next row
  currentOffset += maxHeight + verticalGap;
}

//------------------------------------------------
// 6) SCROLL FREEZE
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
// 7) IMAGE ZOOM
//------------------------------------------------
function attachImageZoomLogic() {
  // If user clicks an image
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('floating-image')) {
      showZoom(evt.target);
    }
  });

  // If user clicks the overlay (outside the zoomed img), close
  const overlay = document.getElementById('zoom-overlay');
  overlay.addEventListener('click', (evt) => {
    if (evt.target.id === 'zoom-overlay') {
      hideZoom();
    }
  });
}

function showZoom(originalImg) {
  const overlay = document.getElementById('zoom-overlay');
  const zoomedImage = document.getElementById('zoomed-image');

  // Show in overlay
  zoomedImage.src = originalImg.src;
  overlay.style.display = 'flex';

  // Slow down overall timeline
  gsap.globalTimeline.timeScale(0.5);
}

function hideZoom() {
  const overlay = document.getElementById('zoom-overlay');
  overlay.style.display = 'none';

  // Restore normal speed
  gsap.globalTimeline.timeScale(1);
}

