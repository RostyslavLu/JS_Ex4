window.addEventListener('DOMContentLoaded', function() {


    let elGallery = document.querySelector('[data-js-gallery]'),
        elsImage = elGallery.querySelectorAll('.gallery__item');
        console.log(elsImage)

    let firstCard = null,
        secondCard = null,
        pairCard = 0;

    elGallery.addEventListener('click', function(e) {

    let clickedImage = e.target.closest('.gallery__item');


    if (!firstCard) {

        firstCard = clickedImage;
        e.target.classList.remove('hidden');
        firstCard.classList.add('no-event');

    } else {

        secondCard = clickedImage;
        e.target.classList.remove('hidden');
        secondCard.classList.add('no-event');

        if (firstCard.dataset.jsImg == secondCard.dataset.jsImg){
            pairCard++;
            
            firstCard = null;
            secondCard = null;

            if (pairCard === elsImage.length/2) {
                elGallery.classList.add('win')
            }

        } else {

            firstCard.firstElementChild.classList.add('hidden');
            secondCard.firstElementChild.classList.add('hidden');
            
            firstCard.classList.remove('no-event');
            secondCard.classList.remove('no-event');

            firstCard = null;
            secondCard = null;

        }
    }

}) 

})