import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
// DATA

galleryItems.forEach(n => {
  const image = `
  <a class="gallery__item" href="${n.original}">
    <img
      class="gallery__image"
      src="${n.preview}"
      alt="${n.description}"
      data-source="${n.original}"
  /></a>
`;
  gallery.insertAdjacentHTML('beforeend', image);
});

var lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
