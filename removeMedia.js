const removeMedia = () => {
  const images = document.querySelectorAll('img, image, svg, video');
  if(images.length) {
    images.forEach((image, index) => {
      image.style.visibility = 'hidden';
      if(index === images.length - 1) {
        document.querySelector('#concealer').style.display = 'none';
      }
    })
  }
}

observerCallback = mutations => {
  removeMedia();
}

const observerTarget = document.querySelector('body');
const observerOptions = {childList: true, subtree: true, attributes: true};
const observer = new MutationObserver(observerCallback);
observer.observe(observerTarget, observerOptions);