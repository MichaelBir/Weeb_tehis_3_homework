//select movie poster original image//
let moviePoster = document.querySelector('.movie-poster');

//select model window layer
let models = document.querySelector('#myModel');

//close button
let closeBtn = document.querySelector('.closeBtn');

//select movie window image
let modelImage = document.querySelector('.movie-poster-model')


moviePoster.addEventListener('click', ()=> {
    models.style.display = 'block';
    modelImage.src = moviePoster.src
});

closeBtn.addEventListener('click', ()=> {
    models.style.display = 'none';
});

window.addEventListener('click', (event)=> {
    if(event.target === models) {
        models.style.display = 'none';
    }
});