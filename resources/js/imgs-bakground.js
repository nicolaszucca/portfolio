const login = document.getElementById('login-proyect');
const divlogin = document.getElementById('login-img-block');

const extension = document.getElementById('extension-proyect');
const divExtension = document.getElementById('extension-img-block');

const first = document.getElementById('first-proyect');
const divFirst = document.getElementById('first-img-block');

const crud = document.getElementById('crud-proyect');
const divCrud = document.getElementById('crud-img-block');

const wheather = document.getElementById('wheather-proyect');
const divWheather = document.getElementById('wheather-img-block');


/* LOGIN */
login.addEventListener('mouseover', () => {
    divlogin.classList.remove('imgs-inactive');
    divlogin.classList.add('imgs-active');
})

login.addEventListener('mouseout', () => {
    divlogin.classList.remove('imgs-active');
    divlogin.classList.add('imgs-inactive');
})



/* Extension */
extension.addEventListener('mouseover', () => {
    divExtension.classList.remove('imgs-inactive');
    divExtension.classList.add('imgs-active');
})

extension.addEventListener('mouseout', () => {
    divExtension.classList.remove('imgs-active');
    divExtension.classList.add('imgs-inactive');
})



/* First */
first.addEventListener('mouseover', () => {
    divFirst.classList.remove('imgs-inactive');
    divFirst.classList.add('imgs-active');
})

first.addEventListener('mouseout', () => {
    divFirst.classList.remove('imgs-active');
    divFirst.classList.add('imgs-inactive');
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



/* Wheather */
wheather.addEventListener('mouseover', () => {
    divWheather.classList.remove('imgs-inactive');
    divWheather.classList.add('imgs-active');
})

wheather.addEventListener('mouseout', () => {
    divWheather.classList.remove('imgs-active');
    divWheather.classList.add('imgs-inactive');
})