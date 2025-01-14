//------------------------------------------------
// 1) CONFIG: Path, Images, etc.
//------------------------------------------------

const folderPath = '/Users/kami/Desktop/animated - portfolio/image folder/';

let images = [
  "IMG_0823.jpg", "IMG_0832.jpg", "IMG_1092.jpg", "IMG_1160.jpg",
  /* ... all your filenames ... */
  "images_photo6.jpg", "images_photo7.jpg"
];

let imagesBackup = [...images];

//------------------------------------------------
// 2) SIZES & PATTERNS
//------------------------------------------------

const sizes = {
  small:  { width: 15, height: 15 },
  medium: { width: 30, height: 30 },
  large:  { width: 55, height: 55 }
};

const patterns = [
  {
    sizeKeys: ["large"],
    xPositions: [ (100 - sizes.large.width) / 2 ] // ~22.5 for centering
  },
  {
    sizeKeys: ["medium", "medium"],
    xPositions: [5, 55]
  },
  {
    sizeKeys: ["small", "small", "small"],
    xPositions: [5, 30, 55]
  },
];

//------------------------------------------------
// 3) ANIMATION CONFIG
//------------------------------------------------

const scrollSpeed   = 18;   // vh/s
const spawnInterval = 900; // every 2s, spawn a new row
let currentOffset   = 0;    // in vh
const verticalGap   = 4;    // gap between rows

//------------------------------------------------
// 4) INITIALIZE
//------------------------------------------------
function initializeAnimation() {
  // spawn a new row every [spawnInterval]
  setInterval(() => {
    createRandomRow();
  }, spawnInterval);

  // freeze on scroll (1s)
  attachScrollFreeze(700);

  // attach logic for zooming images
  attachImageZoomLogic();
}

//------------------------------------------------
// 5) CREATE & ANIMATE A ROW
//------------------------------------------------
function createRandomRow() {
  const pattern   = patterns[Math.floor(Math.random() * patterns.length)];
  const container = document.getElementById('floating-container');

  let maxHeight = 0; // track max height in this row

  pattern.sizeKeys.forEach((sizeKey, i) => {
    if (images.length === 0) {
      images = [...imagesBackup];
    }

    const randomIdx = Math.floor(Math.random() * images.length);
    const imageName = images.splice(randomIdx, 1)[0];

    const { width, height } = sizes[sizeKey];
    if (height > maxHeight) {
      maxHeight = height;
    }

    // create the img element
    const imgEl = document.createElement('img');
    imgEl.classList.add('floating-image');
    imgEl.src = `${folderPath}${imageName}`;

    // size in vw/vh
    imgEl.style.width  = `${width}vw`;
    imgEl.style.height = `${height}vh`;

    // horizontal position
    const xPos = pattern.xPositions[i];
    imgEl.style.left = `${xPos}vw`;

    // vertical spawn
    const spawnY = 100 + currentOffset;
    imgEl.style.top = `${spawnY}vh`;

    container.appendChild(imgEl);

    // animate upward
    const totalDistance = spawnY + height;
    const duration      = totalDistance / scrollSpeed;
    gsap.to(imgEl, {
      y: `-=${totalDistance}vh`,
      duration,
      ease: 'linear'
      // no onComplete remove => remains in DOM
    });
  });

  // move offset for next row
  currentOffset += (maxHeight + verticalGap);
}

//------------------------------------------------
// 6) SCROLL FREEZE (with custom delayMs param)
//------------------------------------------------
function attachScrollFreeze(delayMs) {
  let scrollTimeout = null;

  window.addEventListener('scroll', () => {
    // Pause all GSAP animations immediately
    gsap.globalTimeline.pause();

    // Reset timer if user keeps scrolling
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // After [delayMs] with no scroll, resume
    scrollTimeout = setTimeout(() => {
      gsap.globalTimeline.resume();
    }, delayMs);
  });
}

//------------------------------------------------
// 7) IMAGE ZOOM ON CLICK
//------------------------------------------------
function attachImageZoomLogic() {
  // Listen globally for clicks on ".floating-image"
  document.addEventListener('click', (evt) => {
    const target = evt.target;

    // If we clicked a floating image, zoom
    if (target.classList.contains('floating-image')) {
      showZoom(target);
    }
  });

  // Also handle clicks on the overlay => close zoom
  const overlay = document.getElementById('zoom-overlay');
  overlay.addEventListener('click', (evt) => {
    // If user clicked the overlay or its child, only close if
    // it's NOT the zoomed image itself. So check target vs. currentTarget.
    if (evt.target.id === 'zoom-overlay') {
      hideZoom();
    }
  });
}

function showZoom(originalImg) {
  const overlay = document.getElementById('zoom-overla