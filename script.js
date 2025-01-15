//------------------------------------------------
// 0) RATIO-BASED SIZE FUNCTION
//------------------------------------------------
/**
 * Returns "large" 15% of the time, 
 * "medium" 50% of the time, 
 * and "small" 35% of the time.
 */
function getRandomSizeKey() {
  const r = Math.random() * 100; 
  if (r < 15) {
    return "large";   // 15%
  } else if (r < 65) {
    return "medium";  // next 50%
  } else {
    return "small";   // remaining 35%
  }
}

//------------------------------------------------
// 1) PATH
//------------------------------------------------

// The folder is now "images" at the same level as index.html
const folderPath = './images/';

//------------------------------------------------
// 2) YOUR NEW ORDER (REQUEST #2)
//------------------------------------------------
// (Paste exactly in the order you requested)
const newOrderList = [
  "IMG_4474.jpg",
  "images_photo1..JPG",        // <-- Might cause 404 if it doesn't exist
  "images_photo15.jpg",
  "IMG_0745.JPG",
  "IMG_1144.JPG",
  "IMG_2568.jpg",
  "IMG_1160.jpg",
  "images_photo21.JPG",
  "IMG_1197.jpg",
  "IMG_1128.JPG",
  "IMG_1133.JPG",
  "images_photo32.jpg",
  "IMG_1659.JPG",
  "IMG_1129.JPG",
  "IMG_1148.JPG",
  "IMG_1384.png",
  "IMG_1648.jpg",
  "IMG_5697.JPG",
  "IMG_8440.JPG",
  "IMG_1178.jpg",
  "images_photo35.jpg",
  "IMG_0823.jpg",
  "IMG_1137.JPG",
  "IMG_6419.jpg",
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
  "IMG_164.JPG",   // If not real => 404
  "IMG_1168.jpg",
  "IMG_6337.jpg",
  "IMG_1144.JPG",
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
  "IMG_1223.PNG",
  "IMG_1523.JPG",
  "IMG_1643.JPG",
  "IMG_5236.JPG"
];

//------------------------------------------------
// 3) THE BIGGER LIST (REQUEST #3)
//------------------------------------------------
// We’ll compare this to `newOrderList` 
// and append any "not-yet-used" at the end.
const bigList = [
  "502a5867-498b-4557-91a9-043f8fba2960.JPG",
  "6851eb73-649b-46e8-bc4c-f548f23361a9.JPG",
  "IMG_0016.JPG",
  "IMG_0348.JPG",
  "IMG_0354.JPG",
  "IMG_0500.JPG",
  "IMG_0632.JPG",
  "IMG_0660.JPG",
  "IMG_0663.JPG",
  "IMG_0728.JPG",
  "IMG_0823.jpg",
  "IMG_0832.jpg",
  "IMG_1092.jpg",
  "IMG_1123.PNG",
  "IMG_1124.PNG",
  "IMG_1127.PNG",
  "IMG_1128.JPG",
  "IMG_1129.JPG",
  "IMG_1130.JPG",
  "IMG_1132.JPG",
  "IMG_1133.JPG",
  "IMG_1134.JPG",
  "IMG_1135.JPG",
  "IMG_1136.JPG",
  "IMG_1137.JPG",
  "IMG_1138.JPG",
  "IMG_1139.JPG",
  "IMG_1142.JPG",
  "IMG_1143.JPG",
  "IMG_1145.JPG",
  "IMG_1146.JPG",
  "IMG_1148.JPG",
  "IMG_1149.JPG",
  "IMG_1150.JPG",
  "IMG_1153.PNG",
  "IMG_1154.PNG",
  "IMG_1155.PNG",
  "IMG_1156.PNG",
  "IMG_1157.PNG",
  "IMG_1158.PNG",
  "IMG_1159.PNG",
  "IMG_1160.jpg",
  "IMG_1164.jpg",
  "IMG_1167.jpg",
  "IMG_1168.jpg",
  "IMG_1171.jpg",
  "IMG_1174(1).jpg",
  "IMG_1174.jpg",
  "IMG_1177.jpg",
  "IMG_1178.jpg",
  "IMG_1185.jpg",
  "IMG_1186.PNG",
  "IMG_1187.PNG",
  "IMG_1188.PNG",
  "IMG_1189.jpg",
  "IMG_1191.jpg",
  "IMG_1193.jpg",
  "IMG_1194.jpg",
  "IMG_1197.jpg",
  "IMG_1198.jpg",
  "IMG_1199.jpg",
  "IMG_1202.jpg",
  "IMG_1204.jpg",
  "IMG_1208.jpg",
  "IMG_1210.PNG",
  "IMG_1213.jpg",
  "IMG_1215.jpg",
  "IMG_1217.jpg",
  "IMG_1219.jpg",
  "IMG_1220.PNG",
  "IMG_1221.PNG",
  "IMG_1222.PNG",
  "IMG_1223.PNG",
  "IMG_1224.PNG",
  "IMG_1225.PNG",
  "IMG_1226.PNG",
  "IMG_1262.PNG",
  "IMG_1300.PNG",
  "IMG_1368.jpg",
  "IMG_1384.png",
  "IMG_1440.jpg",
  "IMG_1523.JPG",
  "IMG_1525.JPG",
  "IMG_1617.JPG",
  "IMG_1637.jpg",
  "IMG_1643.JPG",
  "IMG_1648.jpg",
  "IMG_1659.JPG",
  "IMG_1679.jpg",
  "IMG_1681.jpg",
  "IMG_1682.jpg",
  "IMG_1685.jpg",
  "IMG_2460.jpg",
  "IMG_2480.JPG",
  "IMG_2524.jpg",
  "IMG_2530_25-04-2019-19-43-53.jpg",
  "IMG_2543.jpg",
  "IMG_2547.jpg",
  "IMG_2562.jpg",
  "IMG_2578__29-04-2019-02-35-30.jpg",
  "IMG_2594(1).JPG",
  "IMG_2594.JPG",
  "IMG_2658.jpg",
  "IMG_2676.jpg",
  "IMG_2980.png",
  "IMG_4020.jpg",
  "IMG_4379.jpg",
  "IMG_4410.jpg",
  "IMG_4420.jpg",
  "IMG_4440.jpg",
  "IMG_4465.jpg",
  "IMG_4468.jpg",
  "IMG_4496.jpg",
  "IMG_4596.JPG",
  "IMG_4597.jpg",
  "IMG_4619.jpg",
  "IMG_5185.JPG",
  "IMG_5236.JPG",
  "IMG_5245.JPG",
  "IMG_5365.jpeg",
  "IMG_5668.jpg",
  "IMG_5697.JPG",
  "IMG_5999.jpg",
  "IMG_6001.jpg",
  "IMG_6009.jpg",
  "IMG_6010.jpg",
  "IMG_6174.jpeg",
  "IMG_6304.jpg",
  "IMG_6337.jpg",
  "IMG_6339.jpg",
  "IMG_6419.jpg",
  "IMG_6476.jpg",
  "IMG_6503.jpg",
  "IMG_6623.PNG",
  "IMG_6979.jpg",
  "IMG_7048.JPG",
  "IMG_7054.PNG",
  "IMG_7060.jpg",
  "IMG_7247.jpg",
  "IMG_7479.png",
  "IMG_7502.jpeg",
  "IMG_7510.jpg",
  "IMG_8057.jpg",
  "IMG_8062.jpg",
  "IMG_8098.jpeg",
  "IMG_8116.jpg",
  "IMG_8325.jpg",
  "IMG_8440.JPG",
  "IMG_8765.jpeg",
  "IMG_8893.JPG",
  "IMG_8894.JPG",
  "IMG_8941.JPG",
  "IMG_8973.jpg",
  "IMG_9082.jpg",
  "image_names.txt",
  "images_photo10.JPG",
  "images_photo11.JPG",
  "images_photo12.JPG",
  "images_photo13.PNG",
  "images_photo14.PNG",
  "images_photo16.JPG",
  "images_photo18.JPG",
  "images_photo20.PNG",
  "images_photo21(1).JPG",
  "images_photo21.JPG",
  "images_photo22.JPG",
  "images_photo23.jpg",
  "images_photo24.jpeg",
  "images_photo25.JPG",
  "images_photo26.jpg",
  "images_photo27.jpeg",
  "images_photo28.jpeg",
  "images_photo3.jpg",
  "images_photo30.jpg",
  "images_photo31.JPG",
  "images_photo32.jpg",
  "images_photo34.jpg",
  "images_photo35.jpg",
  "images_photo4(1).jpg",
  "images_photo4.jpg",
  "images_photo5.JPG",
  "images_photo6.jpg",
  "images_photo7.jpg",
  "images_photo8.JPG",
  "images_photo9.JPG"
];

//------------------------------------------------
// 4) APPEND “NOT-YET-USED” (REQUEST #3)
//------------------------------------------------
const newOrderSet = new Set(newOrderList);
const finalArray = [...newOrderList];

// For each item in bigList, if not in newOrderSet, append it
for (const item of bigList) {
  if (!newOrderSet.has(item)) {
    finalArray.push(item);
  }
}

// This final array is what we'll animate
let images = finalArray;

//------------------------------------------------
// 5) DIMENSIONS FOR “SMALL” / “MEDIUM” / “LARGE”
//------------------------------------------------
const sizes = {
  small:  { width: 15, height: 15 },
  medium: { width: 30, height: 30 },
  large:  { width: 55, height: 55 }
};

//------------------------------------------------
// 6) ANIMATION CONFIG
//------------------------------------------------
const scrollSpeed   = 18;    // how fast images move upward
const spawnInterval = 900;   // ms between new rows
let currentOffset   = 0;     // vertical offset for next row
const verticalGap   = 4;     // space between rows
let spawnTimer;

//------------------------------------------------
// 7) ON DOM CONTENT LOADED
//------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  spawnTimer = setInterval(createRandomRow, spawnInterval);
  attachScrollFreeze(700);
  attachImageZoomLogic();
});

//------------------------------------------------
// 8) CREATE & ANIMATE A ROW
//------------------------------------------------
function createRandomRow() {
  // If no images left, stop
  if (images.length === 0) {
    clearInterval(spawnTimer);
    return;
  }

  // We'll spawn 1 to 3 images in this row
  const rowCount = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
  const container = document.getElementById('floating-container');
  let maxHeight = 0;

  for (let i = 0; i < rowCount; i++) {
    if (images.length === 0) break; // run out mid-row?

    // 1) Next filename from the array
    const filename = images.shift();

    // 2) Decide size with 15% large, 50% medium, 35% small
    const sizeKey = getRandomSizeKey();
    const { width, height } = sizes[sizeKey];
    if (height > maxHeight) maxHeight = height;

    // 3) Create <img>
    const imgEl = document.createElement('img');
    imgEl.classList.add('floating-image');

    // 4) Build final src
    imgEl.src = folderPath + encodeURIComponent(filename);

    // 5) Sizing
    imgEl.style.width  = width + 'vw';
    imgEl.style.height = height + 'vh';

    // 6) Horizontal positioning depends on how many images in row
    //    e.g. if 2 images => place them at 5vw and 55vw
    //    if 3 => 5vw, 30vw, 55vw
    //    if 1 => center
    let xPos = 0;
    if (rowCount === 1) {
      // Center horizontally
      xPos = (100 - width) / 2; 
    } else if (rowCount === 2) {
      xPos = (i === 0) ? 5 : 55;
    } else { // rowCount === 3
      const positions3 = [5, 30, 55];
      xPos = positions3[i];
    }
    imgEl.style.left = xPos + 'vw';

    // 7) Vertical spawn position
    const spawnY = 100 + currentOffset;
    imgEl.style.top = spawnY + 'vh';

    // 8) Add to container
    container.appendChild(imgEl);

    // 9) Animate upward with GSAP
    const totalDistance = spawnY + height;
    const duration = totalDistance / scrollSpeed;
    gsap.to(imgEl, {
      y: `-=${totalDistance}vh`,
      duration,
      ease: 'linear'
    });
  }

  // Move offset down for the next row
  currentOffset += maxHeight + verticalGap;
}

//------------------------------------------------
// 9) SCROLL FREEZE
//------------------------------------------------
function attachScrollFreeze(delayMs) {
  let scrollTimeout = null;
  window.addEventListener('scroll', () => {
    // Pause all GSAP animations on scroll
    gsap.globalTimeline.pause();
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      gsap.globalTimeline.resume();
    }, delayMs);
  });
}

//------------------------------------------------
// 10) IMAGE ZOOM
//------------------------------------------------
function attachImageZoomLogic() {
  // Show zoom on click
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('floating-image')) {
      showZoom(evt.target);
    }
  });
  
  // Hide zoom if click outside the image
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

  // Show image in overlay
  zoomedImage.src = originalImg.src;
  overlay.style.display = 'flex';

  // Slow down animations
  gsap.globalTimeline.timeScale(0.5);
}

function hideZoom() {
  const overlay = document.getElementById('zoom-overlay');
  overlay.style.display = 'none';

  // Restore normal speed
  gsap.globalTimeline.timeScale(1);
}

