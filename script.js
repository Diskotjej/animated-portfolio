//------------------------------------------------
// 1) CONFIG: Path & Image List (Your Order)
//------------------------------------------------

// The folder is named "images" (no spaces), located at same level as index.html
const folderPath = './images/';

// The EXACT order & names you specified:
let images = [
  "IMG_4474.jpg",
  "images_photo15.jpg",
  "IMG_0745.JPG",
  "IMG_2568.jpg",
  "IMG_1197.jpg",
  "IMG_1128.JPG",
  "IMG_1133.JPG",
  "images_photo32.jpg",
  "IMG_1659.JPG",
  "IMG_1148.JPG",
  "IMG_1384.png",
  "IMG_1648.jpg",
  "IMG_5697.JPG",
  "IMG_8440.JPG",
  "IMG_1178.jpg",
  "images_photo35.jpg",
  "IMG_0823.jpg",
  "IMG_1129.JPG",
  "IMG_6419.jpg",
  "IMG_1160.jpg",
  "IMG_1215.jpg",
  "IMG_1224.PNG",
  "IMG_0832.jpg",
  "IMG_4619.jpg",
  "images_photo8.JPG",
  "IMG_1204.jpg",
  "images_photo14.PNG",
  "IMG_1219.jpg",
  "IMG_9082.jpg",
  "IMG_6174.jpeg",
  "IMG_2578__29-04-2019-02-35-30.jpg",
  "IMG_5668.jpg",
  "IMG_1127.PNG",
  "images_photo27.jpeg",
  "IMG_1185.jpg",
  "IMG_1262.PNG",
  "images_photo26.jpg",
  "IMG_1123.PNG",
  "images_photo11.JPG",
  "IMG_4496.jpg",
  "IMG_1213.jpg",
  "images_photo9.JPG",
  "IMG_7479.png",
  "IMG_1137.JPG",
  "IMG_2530_25-04-2019-19-43-53.jpg",
  "IMG_0823.jpg",
  "images_photo30.jpg",
  "IMG_1174.jpg",
  "IMG_0832.jpg",
  "6851eb73-649b-46e8-bc4c-f548f23361a9.JPG",
  "IMG_8098.jpeg",
  "IMG_1130.JPG",
  "IMG_1368.jpg",
  "IMG_4597.jpg",
  "IMG_1186.PNG",
  "IMG_6339.jpg",
  "IMG_1134.JPG",
  "IMG_1186.PNG",
  "IMG_1188.PNG",
  "IMG_8894.JPG",
  "IMG_1199.jpg",
  "images_photo22.JPG",
  "IMG_4468.jpg",
  "IMG_4020.jpg",
  "502a5867-498b-4557-91a9-043f8fba2960.JPG",
  "IMG_2562.jpg",
  "IMG_1164.jpg",
  "IMG_6503.jpg",
  "IMG_5245.JPG",
  "IMG_1143.JPG",
  "IMG_5185.JPG",
  "IMG_8325.jpg",
  "IMG_2543.jpg",
  "IMG_1193.jpg",
  "images_photo6.jpg",
  "IMG_1679.jpg",
  "IMG_4596.JPG",
  "IMG_1202.jpg",
  "IMG_0832.jpg",
  "IMG_1648.jpg",
  "IMG_4440.jpg",
  "IMG_0354.JPG",
  "IMG_164.JPG",           /* If "IMG_164.JPG" doesn't exist, it will 404 */
  "IMG_1168.jpg",
  "IMG_6337.jpg",
  "IMG_1144.JPG",
  "images_photo24.jpeg",
  "IMG_7048.JPG",
  "IMG_1142.JPG",
  "images_photo21.JPG",
  "IMG_1220.PNG",
  "IMG_2480.JPG",
  "IMG_2524.jpg",
  "IMG_6010.jpg",
  "IMG_4410.jpg",
  "IMG_1440.jpg",
  "IMG_2547.jpg",
  "IMG_1223.PNG",
  "IMG_1523.JPG",
  "IMG_1643.JPG",
  "IMG_5236.JPG"
];

//------------------------------------------------
// 2) SIZES & PATTERNS
//------------------------------------------------

// We'll animate images in random "rows" (1, 2, or 3 images each).
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
// 3) ANIMATION CONFIG
//------------------------------------------------
const scrollSpeed = 18;   // how fast images move upward
const spawnInterval = 900; // ms between new rows
let currentOffset = 0;    // vertical offset for next row
const verticalGap = 4;    // extra spacing

//------------------------------------------------
// 4) INITIALIZE
//------------------------------------------------
let spawnTimer;

document.addEventListener('DOMContentLoaded', () => {
  // Repeatedly create rows until images run out
  spawnTimer = setInterval(createRandomRow, spawnInterval);

  attachScrollFreeze(700);
  attachImageZoomLogic();
});

//------------------------------------------------
// 5) CREATE & ANIMATE A ROW
//------------------------------------------------
function createRandomRow() {
  if (images.length === 0) {
    clearInterval(spawnTimer);
    return;
  }

  // Randomly pick a pattern (1,2,3 images)
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  const container = document.getElementById('floating-container');

  let maxHeight = 0;

  pattern.sizeKeys.forEach((sizeKey, i) => {
    // If we run out mid-pattern, skip
    if (images.length === 0) return;

    // Take the next image in the array, in the order you specified
    const filename = images.shift();

    // Sizing
    const { width, height } = sizes[sizeKey];
    if (height > maxHeight) maxHeight = height;

    // Create an <img>
    const imgEl = document.createElement('img');
    imgEl.classList.add('floating-image');

    // Build full path, e.g. "./images/IMG_4474.jpg"
    imgEl.src = folderPath + encodeURIComponent(filename);

    // Set size
    imgEl.style.width  = width + 'vw';
    imgEl.style.height = height + 'vh';

    // Horizontal position
    const xPos = pattern.xPositions[i];
    imgEl.style.left = xPos + 'vw';

    // Vertical spawn position
    const spawnY = 100 + currentOffset;
    imgEl.style.top = spawnY + 'vh';

    container.appendChild(imgEl);

    // Animate upward
    const totalDistance = spawnY + height;
    const duration = totalDistance / scrollSpeed;
    gsap.to(imgEl, {
      y: `-=${totalDistance}vh`,
      duration,
      ease: 'linear'
    });
  });

  // Increase offset for next row
  currentOffset += maxHeight + verticalGap;
}

//------------------------------------------------
// 6) SCROLL FREEZE
//------------------------------------------------
function attachScrollFreeze(delayMs) {
  let scrollTimeout = null;

  window.addEventListener('scroll', () => {
    // Pause all GSAP animations while scrolling
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
  // When user clicks an image
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('floating-image')) {
      showZoom(evt.target);
    }
  });

  // Click overlay to exit zoom
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

  zoomedImage.src = originalImg.src;
  overlay.style.display = 'flex';

  // Slow down the entire timeline (optional)
  gsap.globalTimeline.timeScale(0.5);
}

function hideZoom() {
  const overlay = document.getElementById('zoom-overlay');
  overlay.style.display = 'none';

  // Restore normal speed
  gsap.globalTimeline.timeScale(1);
}

