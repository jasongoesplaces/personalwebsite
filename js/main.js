function loadImage(id, targetId) {
  // Either an <img>, or an element with a "data-image" attribute
  var el = document.getElementById(id);

  // Either the same element as above, or the targetId element
  var targetEl = targetId ? document.getElementById(targetId) : el;

  // Either the loaded <img>, or the path specified by the "data-image" attribute
  var imageToLoad;

  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === 'undefined') {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }

  if (imageToLoad) {
    var img = new Image();
    img.src = imageToLoad;
    img.onload = function() {
      targetEl.classList.add('is-loaded');
    };
  }
}

document.addEventListener('DOMContentLoaded', function() {
  loadImage('wallpaper');
  loadImage('pictureImage', 'picture');
});

$(".dropdown-trigger").dropdown();
$('.carousel').carousel();

(() => {
  const form = document.querySelector('form');
  const formResponse = document.querySelector('js-form-response');

  form.onsubmit = e => {
    e.preventDefault();

    // Prepare data to send
    const data = {};
    const formElements = Array.from(form);
    formElements.map(input => (data[input.name] = input.value));

    // Log what our lambda function will receive
    console.log(JSON.stringify(data));
  };
})();
