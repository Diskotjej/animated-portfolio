<!-- index.html (simplified example) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Kamilla's Adventures</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header id="main-header">
    <h1 id="site-title">Kamilla's Adventures</h1>
    <nav id="header-nav">
      <a href="about.html" id="about-link">About</a>
    </nav>
  </header>

  <div id="floating-container"></div>

  <div id="zoom-overlay" style="display: none;">
    <img id="zoomed-image" />
  </div>

  <!-- GSAP library -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

  <!-- Our script -->
  <script>
  //------------------------------------------------
  // 1) IMAGE LIST (CORRECT FILENAMES)
  //------------------------------------------------

  const folderPath = './images/'; 
  // If "image folder" truly has a space, use "%20": './image%20folder/'
  // But it's simpler to rename the folder "images" and use './images/'.

  let images = [
    "IMG_4474.jpg",
    "IMG_2568.jpg",
    "IMG_1197.jpg",
    "images_photo32.jpg",
    "IMG_1384.png",
    "IMG_1648.jpg",
    "IMG_1178.jpg",
    "images_photo35.jpg",
    "images_photo23.jpg",
    "IMG_6419.jpg",
    "IMG_1160.jpg",
    "IMG_1215.jpg",
    "IMG_0832.jpg",
    "IMG_4619.jpg",
    "IMG_1204.jpg",
    "IMG_1219.jpg",
    "IMG_9082.jpg",
    "IMG_6174.jpeg",
    "IMG_2578__29-04-2019-02-35-30.jpg",
    "IMG_5668.jpg",
    "images_photo27.jpeg",
    "IMG_1185.jpg",
    "images_photo26.jpg",
    "IMG_4496.jpg",
    "IMG_1213.jpg",
    "IMG_7479.png",
    "IMG_2530_25-04-2019-19-43-53.jpg",
    "IMG_0823.jpg",
    "images_photo30.jpg",
    "IMG_1174.jpg",
    "IMG_0832.jpg",
    "IMG_8098.jpeg",
    "IMG_1368.jpg",
    "IMG_4597.jpg",
    "IMG_6339.jpg",
    "IMG_1199.jpg",
    "IMG_4468.jpg",
    "IMG_4020.jpg",
    "IMG_2562.jpg",
    "IMG_1164.jpg",
    "IMG_6503.jpg",
    "IMG_8325.jpg",
    "IMG_2543.jpg",
    "IMG_1193.jpg",
    "images_photo6.jpg",
    "IMG_1679.jpg",
    "IMG_1202.jpg",
    "IMG_0832.jpg",
    "IMG_1648.jpg",
    "IMG_4440.jpg",
    "IMG_1168.jpg",
    "IMG_6337.jpg",
    "images_photo24.jpeg",
    "IMG_2524.jpg",
    "IMG_6010.jpg",
    "IMG_4410.jpg",
    "IMG_1440.jpg",
    "IMG_2547.jpg"
  ];

  //------------------------------------------------
  // 2) PATTERNS
  //------------------------------------------------
  const sizes = {
    small:  { width: 15, height: 15 },
    medium: { width: 30, height: 30 },
    large:  { width: 55, height: 55 }
  };

  // If you prefer random patterns (1,2,3 images):
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

  // If you’d rather cycle in a fixed sequence (1->2->3->repeat), see the previous code snippet.

  //------------------------------------------------
  // 3) ANIMATION CONFIG
  //------------------------------------------------
  const scrollSpeed = 18;
  const spawnInterval = 900;
  let currentOffset = 0;
  const verticalGap = 4;

  let spawnTimer;

  //------------------------------------------------
  // 4) START
  //------------------------------------------------
  document.addEventListener('DOMContentLoaded', initializeAnimation);

  function initializeAnimation() {
    spawnTimer = setInterval(createRandomRow, spawnInterval);
    attachScrollFreeze(700);
    attachImageZoomLogic();
  }

  //------------------------------------------------
  // 5) CREATE & ANIMATE A ROW
  //------------------------------------------------
  function createRandomRow() {
    if (images.length === 0) {
      clearInterval(spawnTimer);
      return;
    }

    // Pick a random pattern
    const pattern = patterns[Math.floor(Math.random()*patterns.length)];
    const container = document.getElementById('floating-container');

    let maxHeight = 0;

    pattern.sizeKeys.forEach((sizeKey, i) => {
      if (images.length === 0) return; // no more images

      // Take the next image in the list
      const filename = images.shift();

      const { width, height } = sizes[sizeKey];
      if (height > maxHeight) maxHeight = height;

      const imgEl = document.createElement('img');
      imgEl.classList.add('floating-image');
      // Build the src (with URL-encoding if needed)
      imgEl.src = folderPath + encodeURIComponent(filename);

      imgEl.style.width = width + 'vw';
      imgEl.style.height = height + 'vh';

      // Horizontal positions from the pattern
      const xPos = pattern.xPositions[i];
      imgEl.style.left = xPos + 'vw';

      const spawnY = 100 + currentOffset;
      imgEl.style.top = spawnY + 'vh';

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
  </script>
</body>
</html>

