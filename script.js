//------------------------------------------------
// A) CONFIG: Folder path
//------------------------------------------------

const folderPath = './images/';

//------------------------------------------------
// B) SPECIAL SETS (Sizing Rules)
//------------------------------------------------

/**
 * alwaysLargeSet: these images must ALWAYS be large (60×60).
 */
const alwaysLargeSet = new Set([
  "IMG_4474.jpg",
  "images_photo1..JPG",
  "IMG_1144.JPG",
  "IMG_1128.JPG",
  "IMG_1523.JPG",
  "IMG_1659.JPG",
  "IMG_1137.JPG",
  "IMG_4619.jpg"
]);

/**
 * alwaysMediumSet: these images must ALWAYS be medium (45×45).
 */
const alwaysMediumSet = new Set([
  "IMG_0823.jpg",
  "IMG_1219.jpg",
  "IMG_9082.jpg",
  "IMG_6174.jpeg",
  "IMG_2578__29-04-2019-02-35-30.jpg",
  "IMG_5668.jpg",
  "IMG_1262.PNG",
  "images_photo11.JPG",
  "IMG_7479.png",
  "IMG_2530_25-04-2019-19-43-53.jpg",
  "IMG_1174.jpg",
  "6851eb73-649b-46e8-bc4c-f548f23361a9.JPG",
  "IMG_8098.jpeg",
  "IMG_4597.jpg",
  "IMG_1186.PNG",
  "IMG_1648.jpg",
  "IMG_5236.JPG",
  "IMG_1440.jpg",
  "IMG_2524.jpg",
  "IMG_1220.PNG",
  "IMG_1142.JPG",
  "IMG_1168.jpg",
  "IMG_1643.JPG",

  // newly added
  "IMG_1197.jpg"
]);

/**
 * neverSmallSet: these images can be medium or large, but NOT small.
 * If you don’t have any left that belong here, keep it empty.
 */
const neverSmallSet = new Set([]);

//------------------------------------------------
// C) 1) YOUR CUSTOM ORDER (no duplicates if possible)
//------------------------------------------------

const newOrderList = [
  // The new custom list you provided in the question
  "IMG_4474.jpg",
  "images_photo1..JPG",
  "IMG_1144.JPG",
  "IMG_1637.PNG",         // <-- Make sure "IMG_1637" actually exists with extension?
  "IMG_1197.jpg",
  "IMG_1128.JPG",
  "IMG_4619.jpg",
  "IMG_1204.jpg",
  "IMG_6419.jpg",
  "IMG_2568.jpg",
  "IMG_1523.JPG",
  "IMG_1659.JPG",
  "IMG_6339.jpg",
  "IMG_1137.JPG",
  "IMG_1129.JPG",
  "IMG_0745.JPG",
  "IMG_1648.jpg",
  "IMG_1160.jpg",
  "IMG_1133.JPG",
  "IMG_1215.jpg",
  "images_photo32.jpg",
  "IMG_1129.JPG",
  "IMG_1648.jpg",
  "IMG_1148.JPG",
  "images_photo14.PNG",
  "IMG_1384.png",
  "IMG_5697.JPG",
  "IMG_1219.jpg",
  "IMG_0823.jpg",
  "IMG_1178.jpg",
  "IMG_8440.JPG",
  "images_photo35.jpg",
  "IMG_1224.PNG",
  "IMG_0832.jpg",
  "IMG_5668.jpg",
  "images_photo8.JPG",
  "IMG_9082.jpg",
  "IMG_6174.jpeg",
  "IMG_2578__29-04-2019-02-35-30.jpg",
  "images_photo27.jpeg",
  "IMG_1185.jpg",
  "IMG_1127.PNG",
  "IMG_1262.PNG",
  "images_photo26.jpg",
  "IMG_1123.PNG",
  "images_photo11.JPG",
  "IMG_4496.jpg",
  "IMG_1213.jpg",
  "images_photo9.JPG",
  "IMG_7479.png",
  "IMG_2530_25-04-2019-19-43-53.jpg",
  "images_photo30.jpg",
  "IMG_1174.jpg",
  "IMG_0832.jpg",
  "6851eb73-649b-46e8-bc4c-f548f23361a9.JPG",
  "IMG_8098.jpeg",
  "IMG_1130.JPG",
  "IMG_1368.jpg",
  "IMG_4597.jpg",
  "IMG_1186.PNG",
  "images_photo21.JPG",
  "IMG_1134.JPG",
  "images_photo15.jpg",
  "IMG_1186.PNG",
  "IMG_1188.PNG",
  "IMG_1223.PNG",
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
  "IMG_4440.jpg",
  "IMG_0354.JPG",
  "IMG_164.JPG",
  "IMG_1168.jpg",
  "IMG_6337.jpg",
  "images_photo24.jpeg",
  "IMG_7048.JPG",
  "IMG_1142.JPG",
  "IMG_1220.PNG",
  "IMG_2480.JPG",
  "IMG_2524.jpg",
  "IMG_6010.jpg",
  "IMG_4410.jpg",
  "IMG_1440.jpg",
  "IMG_2547.jpg",
  "IMG_1523.JPG",
  "IMG_1643.JPG",
  "IMG_5236.JPG"
];

//------------------------------------------------
// C) 2) YOUR bigList with ALL 190+ IMAGES
//------------------------------------------------
const bigList = [
  // ... put your entire (190+) filenames here ...
];

//------------------------------------------------
// D) COMBINE: 1) “Ordered” + 2) leftover (alphabetical) => final array
//------------------------------------------------

/** 
 * Step 1: Add your newOrderList in the exact given sequence, skipping duplicates.
 */
const usedSet = new Set();
let finalArray = [];
for (const item of newOrderList) {
  if (!usedSet.has(item)) {
    usedSet.add(item);
    finalArray.push(item);
  }
}

/** 
 * Step 2: Gather leftover items from bigList (those not in usedSet).
 *         Sort them alphabetically so they appear in a consistent order.
 */
let leftover = [];
for (const item of bigList) {
  if (!usedSet.has(item)) {
    leftover.push(item);
  }
}
// Sort leftover array in alphabetical order (case-sensitive or case-insensitive).
leftover.sort((a, b) => a.localeCompare(b));

// Then append leftover to finalArray
for (const item of leftover) {
  finalArray.push(item);
}

// The final array has everything, no duplicates
let images = finalArray;

//------------------------------------------------
// E) BIGGER DIMENSIONS
//------------------------------------------------
const sizes = {
  small:  { width: 20, height: 20 },
  medium: { width: 45, height: 45 },
  large:  { width: 60, height: 60 }
};

//------------------------------------------------
// F) PICK SIZE PER IMAGE
//------------------------------------------------
function getSizeKey(filename) {
  if (alwaysLargeSet.has(filename)) {
    return "large";
  }
  if (alwaysMediumSet.has(filename)) {
    return "medium";
  }
  if (neverSmallSet.has(filename)) {
    // randomly medium or large
    const r = Math.random() * 100;
    return (r < 60) ? "medium" : "large";
  }
  // default distribution
  const r = Math.random() * 100;
  if      (r < 20) return "small";
  else if (r < 70) return "medium";
  else             return "large";
}

//------------------------------------------------
// G) NO-OVERLAP LAYOUT
//------------------------------------------------
const scrollSpeed   = 18;
const spawnInterval = 900;
const verticalGap   = 4;
let currentOffset   = 0;
let spawnTimer;

document.addEventListener('DOMContentLoaded', () => {
  spawnTimer = setInterval(createRowNoOverlap, spawnInterval);
  attachScrollFreeze(700);
  attachImageZoomLogic();
});

function createRowNoOverlap() {
  if (images.length === 0) {
    // Done with everything
    clearInterval(spawnTimer);
    return;
  }

  const container = document.getElementById('floating-container');

  let rowImages = [];
  let usedWidth = 0;
  let maxHeight = 0;

  // Attempt up to 3 images if they fit under ~95vw
  while (rowImages.length < 3 && images.length > 0) {
    const filename = images[0];
    const sizeKey = getSizeKey(filename);
    const { width, height } = sizes[sizeKey];

    if (usedWidth + width > 95) {
      // doesn't fit => start new row
      break;
    }
    // fits => remove from `images`
    images.shift();
    rowImages.push({ filename, sizeKey });
    usedWidth += width;
    if (height > maxHeight) maxHeight = height;
  }

  // If no images fit, forcibly place 1 large
  if (rowImages.length === 0 && images.length > 0) {
    const filename = images.shift();
    rowImages.push({ filename, sizeKey: "large" });
    usedWidth = 60;
    maxHeight = 60;
  }

  // Center them horizontally
  let leftSoFar = (100 - usedWidth) / 2;

  // Create + animate
  for (const item of rowImages) {
    const { width, height } = sizes[item.sizeKey];

    const imgEl = document.createElement('img');
    imgEl.classList.add('floating-image');
    imgEl.src = folderPath + encodeURIComponent(item.filename);

    imgEl.style.width  = `${width}vw`;
    imgEl.style.height = `${height}vh`;
    imgEl.style.left   = `${leftSoFar}vw`;

    leftSoFar += width;

    const spawnY = 100 + currentOffset;
    imgEl.style.top = `${spawnY}vh`;
    container.appendChild(imgEl);

    // Animate up
    const totalDistance = spawnY + height;
    const duration = totalDistance / scrollSpeed;
    gsap.to(imgEl, {
      y: `-=${totalDistance}vh`,
      duration,
      ease: 'linear'
    });
  }

  currentOffset += maxHeight + verticalGap;
}

//------------------------------------------------
// H) SCROLL FREEZE
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
// I) IMAGE ZOOM
//------------------------------------------------
function attachImageZoomLogic() {
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('floating-image')) {
      showZoom(evt.target);
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

