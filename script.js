//------------------------------------------------
// A) CONFIG: Folder path
//------------------------------------------------

const folderPath = './images/';

//------------------------------------------------
// B) SPECIAL SETS
//------------------------------------------------

/**
 * 1) Always Large: these images must always be 60×60.
 */
const alwaysLargeSet = new Set([
  "IMG_4474.jpg",       // always large
  "images_photo1..JPG", // always large
  "IMG_1144.JPG",
  "IMG_1128.JPG",
  "IMG_1523.JPG",
  "IMG_1659.JPG",
  "IMG_1137.JPG",
  "IMG_4619.jpg"
]);

/**
 * 2) Always Medium: these images must always be 45×45.
 */
const alwaysMediumSet = new Set([
  // The ones you chose before:
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

  // Newly requested always medium:
  "IMG_1197.jpg"
]);

/**
 * 3) Never Small: can be medium or large, but never small.
 *    If you don’t have any left to put here, leave it empty.
 */
const neverSmallSet = new Set([
  // (If you previously had something here that is now "always large" or
  //  "always medium," remove it from this set to avoid conflicts.)
]);

//------------------------------------------------
// C) NEW ORDER + BIG LIST
//------------------------------------------------

// 1) The new custom order you requested
const newOrderList = [
  "IMG_4474.jpg",
  "images_photo1..JPG",
  "IMG_2568.jpg",
  "IMG_1144.JPG",
  "IMG_1197.jpg",        // alwaysMediumSet
  "IMG_1128.JPG",
  "IMG_4619.jpg",
  "IMG_1204.jpg",
  "IMG_6419.jpg",
  "IMG_1523.JPG",        // alwaysLargeSet
  "IMG_1659.JPG",        // alwaysLargeSet
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

// 2) The bigList with ALL images (like before)
const bigList = [
  // ... place your entire known set of filenames here ...
];

// 3) Append leftover images not in newOrderList
const newOrderSet = new Set(newOrderList);
const finalArray = [...newOrderList];
for (const item of bigList) {
  if (!newOrderSet.has(item)) {
    finalArray.push(item);
  }
}

let images = finalArray; // This is our final array to animate

//------------------------------------------------
// D) BIGGER IMAGE DIMENSIONS
//------------------------------------------------
const sizes = {
  small:  { width: 20, height: 20 },
  medium: { width: 45, height: 45 },
  large:  { width: 60, height: 60 }
};

//------------------------------------------------
// E) LOGIC TO PICK SIZE
//------------------------------------------------
function getSizeKey(filename) {
  // 1) If always large
  if (alwaysLargeSet.has(filename)) {
    return "large";
  }
  // 2) If always medium
  if (alwaysMediumSet.has(filename)) {
    return "medium";
  }
  // 3) If never small => random medium/large
  if (neverSmallSet.has(filename)) {
    const r = Math.random() * 100;
    return (r < 60) ? "medium" : "large";
  }
  // 4) Default distribution: 20% small, 50% medium, 30% large
  const r = Math.random() * 100;
  if      (r < 20) return "small";
  else if (r < 70) return "medium";
  else             return "large";
}

//------------------------------------------------
// F) NO-OVERLAP LAYOUT + ANIMATION
//------------------------------------------------
const scrollSpeed   = 18;
const spawnInterval = 900;
let currentOffset   = 0;
const verticalGap   = 4;
let spawnTimer;

document.addEventListener('DOMContentLoaded', () => {
  spawnTimer = setInterval(createRowNoOverlap, spawnInterval);
  attachScrollFreeze(700);
  attachImageZoomLogic();
});

function createRowNoOverlap() {
  if (images.length === 0) {
    clearInterval(spawnTimer);
    return;
  }

  const container = document.getElementById('floating-container');

  let rowImages = [];
  let usedWidth = 0;
  let maxHeight = 0;

  // Attempt up to 3 images if they fit in ~95vw
  while (rowImages.length < 3 && images.length > 0) {
    const filename = images[0]; // peek
    const sizeKey = getSizeKey(filename);
    const { width, height } = sizes[sizeKey];

    if (usedWidth + width > 95) {
      // doesn't fit horizontally => start a new row
      break;
    }
    // it fits => shift from the array
    images.shift();
    rowImages.push({ filename, sizeKey });
    usedWidth += width;
    if (height > maxHeight) maxHeight = height;
  }

  // If zero images fit (maybe a large image alone?), forcibly place 1 large
  if (rowImages.length === 0 && images.length > 0) {
    const filename = images.shift();
    rowImages.push({ filename, sizeKey: "large" });
    usedWidth = sizes.large.width;
    maxHeight = sizes.large.height;
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
// G) SCROLL FREEZE
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
// H) IMAGE ZOOM
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
