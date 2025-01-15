//------------------------------------------------
// 1) CONFIG: Path, Images, etc.
//------------------------------------------------

// If your folder is literally named "image folder" with a space,
// and you are using GitHub Pages, you might need URL encoding (image%20folder).
// But if possible, rename your folder to just "images" for simplicity.
const folderPath = './image folder/';

// IMPORTANT: The exact order of your images:
let images = [
  "IMG_4474.JPG",
  "images/photo1..JPG",
  "IMG_0745.JPG",
  "IMG_2568.JPG",
  "IMG_1197.JPG",
  "IMG_1128.JPG",
  "IMG_1133.JPG",
  "IMG_1659.JPG",
  "IMG_1148.JPG",
  "IMG_1384.JPG",
  "IMG_1648.JPG",
  "IMG_5697.JPG",
  "IMG_8440.JPG",
  "IMG_1178.jpg",
  "images/photo35.JPG",
  "images/photo23.JPG",
  "IMG_1129.JPG",
  "IMG_6419.JPG",
  "IMG_1160.JPG",
  "IMG_1215.JPG",
  "IMG_1224.PNG",
  "IMG_0832.JPG",
  "IMG_4619.JPG",
  "images/photo8.JPG",
  "IMG_1204.JPG",
  "images/photo14.PNG",
  "IMG_1219.JPG",
  "IMG_9082.JPG",
  "IMG_6174.JPG",
  "IMG_2578__29-04-2019-02-35-30.JPG",
  "IMG_5668.JPG",
  "IMG_1127.PNG",
  "Images/photo27.jpeg",
  "IMG_1185.JPG",
  "IMG_1262.PNG",
  "images_photo26.JPG",
  "IMG_1123.PNG",
  "images/photo11.JPG",
  "IMG_4496.JPG",
  "IMG_1213.JPG",
  "images_photo9.JPG",
  "IMG_7479.png",
  "IMG_1137.JPG",
  "IMG_2530_25-04-2019-19-43-53.JPG",
  "IMG_0823.JPG",
  "images_photo30.JPG",
  "IMG_1174.JPG",
  "IMG_0832.JPG",
  "6851eb73-649b-46e8-bc4c-f548f23361a9.JPG",
  "IMG_8098.JPG",
  "IMG_1130.JPG",
  "IMG_1368.JPG",
  "IMG_4597.JPG",
  "IMG_1186.PNG",
  "IMG_6339.JPG",
  "IMG_1134.JPG",
  "IMG_1186.PNG",
  "IMG_1188.PNG",
  "IMG_8894.JPG",
  "IMG_1199.JPG",
  "Images/photo22.JPG",
  "IMG_4468.JPG",
  "IMG_4020.JPG",
  "502a5867-498b-4557-91a9-043f8fba2960.JPG",
  "IMG_2562.JPG",
  "IMG_1164.JPG",
  "IMG_6503.JPG",
  "IMG_5245.JPG",
  "IMG_1143.JPG",
  "IMG_5185.JPG",
  "IMG_8325.JPG",
  "IMG_2543",          // <-- If you really have no extension, it’s unusual. If it's .JPG, add it.
  "IMG_1193.JPG",
  "images/photo6.JPG",
  "IMG_1679.JPG",
  "IMG_1917.JPG",
  "IMG_4596.JPG",
  "IMG_1202.JPG",
  "IMG_0832.JPG",
  "IMG_1648.JPG",
  "IMG_4440.JPG",
  "IMG_0354.JPG",
  "IMG_1647.JPG",
  "IMG_1168.JPG",
  "IMG_6337.JPG",
  "IMG_1144.JPG",
  "images/photo24.JPG",
  "IMG_7048.JPG",
  "IMG_1142.JPG",
  "images_photo21.JPG",
  "IMG_1220.JPG",
  "IMG_2480.JPG",
  "IMG_2524.JPG",
  "IMG_6010.JPG",
  "IMG_4410.JPG",
  "IMG_1440.JPG",
  "IMG_2547.JPG",
  "IMG_1223.PNG",
  "IMG_1523.JPG",
  "IMG_1643.JPG",
  "IMG_5236.JPG"
];

//------------------------------------------------
// 2) SIZES & PATTERNS
//------------------------------------------------

// Same as before
const sizes = {
  small:  { width: 15, height: 15 },
  medium: { width: 30, height: 30 },
  large:  { width: 55, height: 55 }
};

const patterns = [
  // 1-image pattern
  {
    sizeKeys: ["large"],
    xPositions: [(100 - sizes.large.width) / 2] // center
  },
  // 2-image pattern
  {
    sizeKeys: ["medium", "medium"],
    xPositions: [5, 55]
  },
  // 3-image pattern
  {
    sizeKeys: ["small", "small", "small"],
    xPositions: [5, 30, 55]
  }
];

//------------------------------------------------
// 3) ANIMATION CONFIG
//------------------------------------------------
const scrollSpeed = 18;       // controls how fast images move upwards
const spawnInterval = 900;    // ms between row spawns
let currentOffset = 0;        // tracks vertical offset as rows appear
const verticalGap = 4;        // extra vertical space after each row

//------------------------------------------------
// 4) INITIALIZE
//------------------------------------------------
let spawnTimer;

function initializeAnimation() {
  // Start spawning rows periodically
  spawnTimer = setInterval(() => {
    createRandomRow();
  }, spawnInterval);

  attachScrollFreeze(700);
  attachImageZoomLogic();
}

//------------------------------------------------
// 5) CREATE & ANIMATE A ROW
//------------------------------------------------
function createRandomRow() {
  // If we've run out of images, stop creating new rows
  if (images.length === 0) {
    clearInterval(spawnTimer);
    return;
  }

  // Pick one of the random patterns (but the *image order* is still sequential)
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  const container = document.getElementById('floating-container');

  let maxHeight = 0;

  // For each image in the chosen pattern
  pattern.sizeKeys.forEach((sizeKey, i) => {
    // If we run out mid-pattern, stop
    if (images.length === 0) return;

    // Take the next image in the array, in order
    const imageName = images.shift();

    const { width, height } = sizes[sizeKey];
    if (height > maxHeight) {
      maxHeight = height;
    }

    // Create the image element
    const imgEl = document.createElement('img');
    imgEl.classList.add('floating-image');
    imgEl.src = `${folderPath}${encodeURIComponent(imageName)}`;
    imgEl.style.width  = `${width}vw`;
    imgEl.style.height = `${height}vh`;

    // Horizontal positioning in viewport width
    const xPos = pattern.xPositions[i];
    imgEl.style.left = `${xPos}vw`;

    // Spawn position in viewport height
    const spawnY = 100 + currentOffset;
    imgEl.style.top = `${spawnY}vh`;

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

  // Increase vertical offset so the next row spawns lower
  currentOffset += maxHeight + verticalGap;
}

//------------------------------------------------
// 6) SCROLL FREEZE
//------------------------------------------------
function attachScrollFreeze(delayMs) {
  let scrollTimeout = null;

  window.addEventListener('scroll', () => {
    // Temporarily pause the entire GSAP timeline on scroll
    gsap.globalTimeline.pause();
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      // Resume after no scrolling for [delayMs]
      gsap.globalTimeline.resume();
    }, delayMs);
  });
}

//------------------------------------------------
// 7) IMAGE ZOOM
//------------------------------------------------
function attachImageZoomLogic() {
  document.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('floating-image')) {
      showZoom(target);
    }
  });

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
  gsap.globalTimeline.timeScale(0.5); // optional slow-down
}

function hideZoom() {
  const overlay = document.getElementById('zoom-overlay');
  overlay.style.display = 'none';
  gsap.globalTimeline.timeScale(1);  // restore speed
}

//------------------------------------------------
// 8) START
//------------------------------------------------
document.addEventListener('DOMContentLoaded', initializeAnimation);
