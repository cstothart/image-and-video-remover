const removeMedia = () => {
  const media = document.querySelectorAll('img, image, svg, video');
  if(media.length) {
    media.forEach((mediaElement, index) => {
      mediaElement.style.visibility = 'hidden';
      if(index === media.length - 1) {
        document.querySelector('#concealer').style.display = 'none';
      }
    });
  }
}

const removeBackgroundImages = () => {
  const elements = document.querySelectorAll('*');
  elements.forEach(element => {
    element.style.backgroundImage = '';
  })
}

const observerCallback = mutations => {
  removeMedia();
  removeBackgroundImages();
}

removeMedia();

const observerTarget = document.querySelector('body');
const observerOptions = {childList: true, subtree: true, attributes: true};
const observer = new MutationObserver(observerCallback);
observer.observe(observerTarget, observerOptions);