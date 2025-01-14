//------------------------------------------------
// 1) CONFIG: Path, Images, etc.
//------------------------------------------------

const folderPath = './image%20folder/';

let images = [
  "IMG_0823.jpg", "IMG_0832.jpg", "IMG_1092.jpg", "IMG_1160.jpg", "IMG_1164.jpg",
  "IMG_1167.jpg", "IMG_1168.jpg", "IMG_1171.jpg", "IMG_1174(1).jpg", "IMG_1174.jpg",
  "IMG_1177.jpg", "IMG_1178.jpg", "IMG_1185.jpg", "IMG_1189.jpg", "IMG_1191.jpg",
  "IMG_1193.jpg", "IMG_1194.jpg", "IMG_1197.jpg", "IMG_1198.jpg", "IMG_1199.jpg",
  "IMG_1202.jpg", "IMG_1204.jpg", "IMG_1208.jpg", "IMG_1213.jpg", "IMG_1215.jpg",
  "IMG_1217.jpg", "IMG_1219.jpg", "IMG_1368.jpg", "IMG_1384.png", "IMG_1440.jpg",
  "IMG_1637.jpg", "IMG_1648.jpg", "IMG_1679.jpg", "IMG_1681.jpg", "IMG_1682.jpg",
  "IMG_1685.jpg", "IMG_2460.jpg", "IMG_2524.jpg", "IMG_2530_25-04-2019-19-43-53.jpg",
  "IMG_2543.jpg", "IMG_2547.jpg", "IMG_2562.jpg", "IMG_2568.jpg", "IMG_2578__29-04-2019-02-35-30.jpg",
  "IMG_2658.jpg", "IMG_2676.jpg", "IMG_2980.png", "IMG_4020.jpg", "IMG_4379.jpg",
  "IMG_4410.jpg", "IMG_4420.jpg", "IMG_4440.jpg", "IMG_4465.jpg", "IMG_4468.jpg",
  "IMG_4474.jpg", "IMG_4496.jpg", "IMG_4597.jpg", "IMG_4619.jpg", "IMG_5365.jpeg",
  "IMG_5668.jpg", "IMG_5999.jpg", "IMG_6001.jpg", "IMG_6009.jpg", "IMG_6010.jpg",
  "IMG_6174.jpeg", "IMG_6304.jpg", "IMG_6337.jpg", "IMG_6339.jpg", "IMG_6419.jpg",
  "IMG_6476.jpg", "IMG_6503.jpg", "IMG_6979.jpg", "IMG_7060.jpg", "IMG_7247.jpg",
  "IMG_7479.png", "IMG_7502.jpeg", "IMG_7510.jpg", "IMG_8057.jpg", "IMG_8062.jpg",
  "IMG_8098.jpeg", "IMG_8116.jpg", "IMG_8325.jpg", "IMG_8765.jpeg", "IMG_8973.jpg",
  "IMG_9082.jpg", "images_photo15.jpg", "images_photo23.jpg", "images_photo24.jpeg",
  "images_photo26.jpg", "images_photo27.jpeg", "images_photo28.jpeg", "images_photo3.jpg",
  "images_photo30.jpg", "images_photo32.jpg", "images_photo34.jpg", "images_photo35.jpg",
  "images_photo4(1).jpg", "images_photo4.jpg", "images_photo6.jpg", "images_photo7.jpg"
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
    imgEl.src = `${folderPath}${encodeURIComponent(imageName)}`;

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
  const overlay = document.getElementById('zoom-overlay');
  const zoomedImage = document.getElementById('zoomed-image');

  // Clone the src from the clicked image
  zoomedImage.src = originalImg.src;

  // Show overlay
  overlay.style.display = 'flex';

  // Slow animation to half speed => 2x slower
  gsap.globalTimeline.timeScale(0.5);
}

function hideZoom() {
  const overlay = document.getElementById('zoom-overlay');
  overlay.style.display = 'none';

  // Restore normal speed
  gsap.globalTimeline.timeScale(1);
}

//------------------------------------------------
// 8) START
//------------------------------------------------
document.addEventListener('DOMContentLoaded', initializeAnimation);

