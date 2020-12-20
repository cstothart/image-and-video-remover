const removeMedia = () => {
    const media = document.querySelectorAll('img, image, svg, video, iframe');
    if(media.length) {
      media.forEach((mediaElement, index) => {
        const elementTag = mediaElement.tagName.toLowerCase();
        if(elementTag === 'iframe') {
          try {
            const iframeDoc = mediaElement.contentDocument || 
              mediaElement.contentWindow.document;
            const iframeMedia = 
              iframeDoc.querySelectorAll('img, image, svg, video');
            iframeMedia.forEach(iframeMediaElement => {
              iframeMediaElement.style.visibility = 'hidden';
            });
          } catch(err) {
            console.log('Unable to remove images and videos from iframe: ', 
              err);
          }
        } else {
          mediaElement.style.visibility = 'hidden';
        }
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

const observerTarget = document.querySelector('body');
const observerOptions = {childList: true, subtree: true, attributes: true};
const observer = new MutationObserver(observerCallback);
observer.observe(observerTarget, observerOptions);