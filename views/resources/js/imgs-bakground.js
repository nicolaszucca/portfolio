const login = document.getElementById('login-proyect');
const divlogin = document.getElementById('login-img-block');

const crud = document.getElementById('crud-proyect');
const divCrud = document.getElementById('crud-img-block');

const scrapper = document.getElementById('scrapper-proyect');
const divScrapper = document.getElementById('scrapper-img-block');

const first = document.getElementById('first-proyect');
const divFirst = document.getElementById('first-img-block');


/* LOGIN */
login.addEventListener('mouseover', () => {
    divlogin.classList.remove('imgs-inactive');
    divlogin.classList.add('imgs-active');
})

login.addEventListener('mouseout', () => {
    divlogin.classList.remove('imgs-active');
    divlogin.classList.add('imgs-inactive');
})

/* crud */
crud.addEventListener('mouseover', () => {
    divCrud.classList.remove('imgs-inactive');
    divCrud.classList.add('imgs-active');
})

crud.addEventListener('mouseout', () => {
    divCrud.classList.remove('imgs-active');
    divCrud.classList.add('imgs-inactive');
})

/* Scrapper */
scrapper.addEventListener('mouseover', () => {
    divScrapper.classList.remove('imgs-inactive');
    divScrapper.classList.add('imgs-active');
})

scrapper.addEventListener('mouseout', () => {
    divScrapper.classList.remove('imgs-active');
    divScrapper.classList.add('imgs-inactive');
})

/* first */
first.addEventListener('mouseover', () => {
    divFirst.classList.remove('imgs-inactive');
    divFirst.classList.add('imgs-active');
})

first.addEventListener('mouseout', () => {
    divFirst.classList.remove('imgs-active');
    divFirst.classList.add('imgs-inactive');
})