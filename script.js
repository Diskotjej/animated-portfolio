//------------------------------------------------
// A) CONFIG: Folder path
//------------------------------------------------
const folderPath = './images/';

//------------------------------------------------
// B) SPECIAL SETS (Sizing Rules)
//------------------------------------------------

/**
 * 1) Always Large: these images must ALWAYS be large (60×60).
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
 * 2) Always Medium: these images must ALWAYS be medium (45×45).
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
  "IMG_1197.jpg"   // newly requested always-medium
]);

/**
 * 3) Never Small: these images can be medium or large, 
 *    but NOT small. If you have none, leave it empty.
 */
const neverSmallSet = new Set([]);

//------------------------------------------------
// C) YOUR SINGLE, COMPLETE ORDERED LIST
//------------------------------------------------

/**
 * This array contains ALL images, in the exact 
 * final order you specified—no leftover logic,
 * no merging. We'll display them from first to last.
 */
let images = [
  "IMG_4474.jpg",
  "images_photo1..JPG",
  "IMG_1144.JPG",
  "IMG_1637.JPG",
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
  "IMG_5236.JPG",

  // Additional images at the end:
  "IMG_0016.JPG",
  "IMG_0348.JPG",
  "IMG_0500.JPG",
  "IMG_0632.JPG",
  "IMG_0660.JPG",
  "IMG_0663.JPG",
  "IMG_0728.JPG",
  "IMG_1092.jpg",
  "IMG_1124.PNG",
  "IMG_1132.JPG",
  "IMG_1135.JPG",
  "IMG_1136.JPG",
  "IMG_1138.JPG",
  "IMG_1139.JPG",
  "IMG_1145.JPG",
  "IMG_1146.JPG",
  "IMG_1149.JPG",
  "IMG_1150.JPG",
  "IMG_1153.PNG",
  "IMG_1154.PNG",
  "IMG_1155.PNG",
  "IMG_1156.PNG",
  "IMG_1157.PNG",
  "IMG_1158.PNG",
  "IMG_1159.PNG",
  "IMG_1167.jpg",
  "IMG_1171.jpg",
  "IMG_1174(1).jpg",
  "IMG_1177.jpg",
  "IMG_1187.PNG",
  "IMG_1189.jpg",
  "IMG_1191.jpg",
  "IMG_1194.jpg",
  "IMG_1198.jpg",
  "IMG_1208.jpg",
  "IMG_1210.PNG",
  "IMG_1217.jpg",
  "IMG_1221.PNG",
  "IMG_1222.PNG",
  "IMG_1225.PNG",
  "IMG_1226.PNG",
  "IMG_1300.PNG",
  "IMG_1525.JPG",
  "IMG_1617.JPG",
  "IMG_1637.jpg",      // note there's also an "IMG_1637.JPG" above 
  "IMG_1681.jpg",
  "IMG_1682.jpg",
  "IMG_1685.jpg",
  "IMG_2460.jpg",
  "IMG_2594(1).JPG",
  "IMG_2594.JPG",
  "IMG_2658.jpg",
  "IMG_2676.jpg",
  "IMG_2980.png",
  "IMG_4379.jpg",
  "IMG_4420.jpg",
  "IMG_4465.jpg",
  "IMG_5365.jpeg",
  "IMG_5999.jpg",
  "IMG_6001.jpg",
  "IMG_6009.jpg",
  "IMG_6304.jpg",
  "IMG_6476.jpg",
  "IMG_6623.PNG",
  "IMG_6979.jpg",
  "IMG_7054.PNG",
  "IMG_7060.jpg",
  "IMG_7247.jpg",
  "IMG_7502.jpeg",
  "IMG_7510.jpg",
  "IMG_8057.jpg",
  "IMG_8062.jpg",
  "IMG_8116.jpg",
  "IMG_8765.jpeg",
  "IMG_8893.JPG",
  "IMG_8941.JPG",
  "IMG_8973.jpg",
  "image_names.txt",
  "images_photo10.JPG",
  "images_photo12.JPG",
  "images_photo13.PNG",
  "images_photo16.JPG",
  "images_photo18.JPG",
  "images_photo20.PNG",
  "images_photo21(1).JPG",
  "images_photo23.jpg",
  "images_photo25.JPG",
  "images_photo28.jpeg",
  "images_photo3.jpg",
  "images_photo31.JPG",
  "images_photo34.jpg",
  "images_photo4(1).jpg",
  "images_photo4.jpg",
  "images_photo5.JPG",
  "images_photo7.jpg"
];

//------------------------------------------------
// D) BIGGER DIMENSIONS
//------------------------------------------------
const sizes = {
  small:  { width: 20, height: 20 },
  medium: { width: 45, height: 45 },
  large:  { width: 60, height: 60 }
};

//------------------------------------------------
// E) SIZE PICKING LOGIC
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
  // 3) If never small => random medium or large
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
// F) NO-OVERLAP LAYOUT
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
    // Done. We used up the entire array.
    clearInterval(spawnTimer);
    return;
  }

  const container = document.getElementById('floating-container');
  let rowImages = [];
  let usedWidth = 0;
  let maxHeight = 0;

  // Attempt up to 3 images if they fit in ~95vw
  while (rowImages.length < 3 && images.length > 0) {
    const filename = images[0]; // peek next
    const sizeKey = getSizeKey(filename);
    const { width, height } = sizes[sizeKey];

    if (usedWidth + width > 95) {
      // no more fit => new row
      break;
    }
    // it fits => shift out of images
    images.shift();
    rowImages.push({ filename, sizeKey });
    usedWidth += width;
    if (height > maxHeight) maxHeight = height;
  }

  // If no images fit, forcibly place one as large
  if (rowImages.length === 0 && images.length > 0) {
    const filename = images.shift();
    rowImages.push({ filename, sizeKey: "large" });
    usedWidth = sizes.large.width;
    maxHeight = sizes.large.height;
  }

  // center them horizontally
  let leftSoFar = (100 - usedWidth) / 2;

  // create + animate each image
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

    // animate upward
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
