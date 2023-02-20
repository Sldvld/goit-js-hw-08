// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

const galleryEl = document.querySelector(`.gallery`)

const createMarkup = galleryItems.map(
    ({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
}
).join(``);
galleryEl.insertAdjacentHTML(`afterbegin`, createMarkup);

var lightbox = new SimpleLightbox('.gallery a',{
    captionDelay: 250,
    captionsData: "alt", 
  });


console.log(galleryItems);
