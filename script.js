//------------------------------------------------
// 1) CONFIG: Path, Images, etc.
//------------------------------------------------

const folderPath = './image%20folder/';
let images = [
  "IMG_0823.jpg", "IMG_0832.jpg", "IMG_1092.jpg", /* ... etc ... */ "images_photo7.jpg"
];

// // REMOVED: We do NOT need the backup anymore
// let imagesBackup = [...images];

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
    xPositions: [(100 - sizes.large.width) / 2]
  },
  {
    sizeKeys: ["medium", "medium"],
    xPositions: [5, 55]
  },
  {
    sizeKeys: ["small", "small", "small"],
    xPositions: [5, 30, 55]
  }
];

//------------------------------------------------
// 3) ANIMATION CONFIG
//------------------------------------------------

const scrollSpeed = 18;
const spawnInterval = 900;
let currentOffset = 0;
const verticalGap = 4;

//------------------------------------------------
// 4) INITIALIZE
//------------------------------------------------

let spawnTimer; // NEW: Keep a reference to the setInterval

function initializeAnimation() {
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
  // NEW: If all images are used up, stop
  if (images.length === 0) {
    // Optional: clear the interval so it doesn't run forever
    clearInterval(spawnTimer);
    return;
  }

  // REMOVED: no more refill
  // if (images.length === 0) {
  //   images = [...imagesBackup];
  // }

  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  const container = document.getElementById('floating-container');

  let maxHeight = 0;

  pattern.sizeKeys.forEach((sizeKey, i) => {
    // Again, guard: if we are literally about to run out mid-pattern
    if (images.length === 0) return;

    const imageName = images.shift(); // remove from the front => never repeats

    const { width, height } = sizes[sizeKey];
    if (height > maxHeight) {
      maxHeight = height;
    }

    const imgEl = document.createElement('img');
    imgEl.classList.add('floating-image');
    imgEl.src = `${folderPath}${encodeURIComponent(imageName)}`;
    imgEl.style.objectFit = 'cover';
    imgEl.style.width = `${width}vw`;
    imgEl.style.height = `${height}vh`;

    const xPos = pattern.xPositions[i];
    imgEl.style.left = `${xPos}vw`;

    const spawnY = 100 + currentOffset;
    imgEl.style.top = `${spawnY}vh`;

    container.appendChild(imgEl);

    const totalDistance = spawnY + height;
    const duration = totalDistance / scrollSpeed;
    gsap.to(imgEl, {
      y: `-=${totalDistance}vh`,
      duration,
      ease: 'linear'
    });
  });

  currentOffset += maxHeight + verticalGap;
}

//------------------------------------------------
// 6) SCROLL FREEZE
//------------------------------------------------
function attachScrollFreeze(delayMs) {
  let scrollTimeout = null;

  window.addEventListener('scroll', () => {
    gsap.globalTimeline.pause();
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
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
  gsap.globalTimeline.timeScale(0.5);
}

function hideZoom() {
  const overlay = document.getElementById('zoom-overlay');
  overlay.style.display = 'none';
  gsap.globalTimeline.timeScale(1);
}

//------------------------------------------------
// 8) START
//------------------------------------------------
document.addEventListener('DOMContentLoaded', initializeAnimation);

