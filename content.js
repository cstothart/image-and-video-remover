const removeAllMedia = () => {
  const images = document.querySelectorAll('img, image, svg, video');
  if(images.length) {
    images.forEach((image, index) => {
      image.style.visibility = 'hidden';
    })
  }
}

observerCallback = mutations => {
  removeAllMedia();
}

const observerTarget = document.querySelector('body');
const observerOptions = {childList: true, subtree: true, attributes: true};
const observer = new MutationObserver(observerCallback);
observer.observe(observerTarget, observerOptions);