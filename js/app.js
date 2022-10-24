const imagesArray = [
    '01.jpg',
    '02.jpg', 
    '03.jpg', 
    '04.jpg', 
    '05.jpg'
];

let imagesTags = '';

const slider = document.querySelector('.slider');

for (let i = 0; i < imagesArray.length; i++){
    imagesTags += `
        <img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
    `;
}


const up = document.querySelector('.up');
const down = document.querySelector('.down');

slider.innerHTML += imagesTags;


let counterImages = 0;
const items = document.getElementsByClassName('item');

up.addEventListener('click', function(){
    items[counterImages].classList.remove('active');
    counterImages++;
    items [counterImages].classList.add('active');
    console.log(counterImages);
    console.log(counterImages);
});

down.addEventListener('click', function(){
    console.log('DOWN')
});