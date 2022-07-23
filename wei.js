document.addEventListener('DOMContentLoaded', (event) => {
  let carrouselEls = document.getElementsByClassName("carrousel");
  if (!carrouselEls) {
    return;
  }
  let carrousels = [];
  for (let el of carrouselEls) {
    let images = el.getElementsByClassName("slide");
    carrousels.push({
      currentImage: 0,
      images: images
    });
    for (let image of images) {
      image.style.display = 'none';
    }
    images[0].style.display = 'block';
  }
  setInterval(() => {
    for (let carrousel of carrousels) {
      let idx = carrousel.currentImage;
      let nextIdx = (idx + 1) % carrousel.images.length;
      carrousel.images[idx].style.display = 'none';
      carrousel.images[nextIdx].style.display = 'block';
      carrousel.currentImage = nextIdx;
    }
  }, 4000);
});