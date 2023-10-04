//select movie poster original image//
let moviePoster = document.querySelector('#P1');
let moviePoster1 = document.querySelector('#P2');
let moviePoster2 = document.querySelector('#P3');
let moviePoster3 = document.querySelector('#P4');
let moviePoster4 = document.querySelector('#P5');

//select model window layer
let models = document.querySelector('#myModel');
let models1 = document.querySelector('#myModel1');
let models2 = document.querySelector('#myModel2');
let models3 = document.querySelector('#myModel3');
let models4 = document.querySelector('#myModel4');

//close button
let closeBtn = document.querySelector('#C1');
let closeBtn1 = document.querySelector('#C2');
let closeBtn2 = document.querySelector('#C3');
let closeBtn3 = document.querySelector('#C4');
let closeBtn4 = document.querySelector('#C5');

//select movie window image
let modelImage = document.querySelector('.movie-poster-model')
let modelImage1 = document.querySelector('.movie-poster-model1')
let modelImage2 = document.querySelector('.movie-poster-model2')
let modelImage3 = document.querySelector('.movie-poster-model3')
let modelImage4 = document.querySelector('.movie-poster-model4')


moviePoster.addEventListener('click', ()=> {
    models.style.display = 'block';
    modelImage.src = moviePoster.src
});
moviePoster1.addEventListener('click', ()=> {
    models1.style.display = 'block';
    modelImage1.src = moviePoster1.src
});
moviePoster2.addEventListener('click', ()=> {
    models2.style.display = 'block';
    modelImage2.src = moviePoster2.src
});
moviePoster3.addEventListener('click', ()=> {
    models3.style.display = 'block';
    modelImage3.src = moviePoster3.src
});
moviePoster4.addEventListener('click', ()=> {
    models4.style.display = 'block';
    modelImage4.src = moviePoster4.src
});

closeBtn.addEventListener('click', ()=> {
    models.style.display = 'none';
});
closeBtn1.addEventListener('click', ()=> {
    models1.style.display = 'none';
});
closeBtn2.addEventListener('click', ()=> {
    models2.style.display = 'none';
});
closeBtn3.addEventListener('click', ()=> {
    models3.style.display = 'none';
});
closeBtn4.addEventListener('click', ()=> {
    models4.style.display = 'none';
});

window.addEventListener('click', (event)=> {
    if(event.target === models) {
        models.style.display = 'none';
    }
    if(event.target === models1) {
        models1.style.display = 'none';
    }
    if(event.target === models2) {
        models2.style.display = 'none';
    }
    if(event.target === models3) {
        models3.style.display = 'none';
    }
    if(event.target === models4) {
        models4.style.display = 'none';
    }
});
