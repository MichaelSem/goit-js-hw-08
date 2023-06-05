"use strict";

var _simplelightbox = _interopRequireDefault(require("simplelightbox"));
var _galleryItems = require("./gallery-items.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const markup = _galleryItems.galleryItems.reduce((acc, _ref) => {
  let {
    original,
    preview,
    description
  } = _ref;
  return acc += `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
}, '');
galleryContainer.insertAdjacentHTML('beforeend', markup);
const lightbox = new _simplelightbox.default('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});
