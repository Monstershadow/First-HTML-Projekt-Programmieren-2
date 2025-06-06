let btn_montag = document.getElementById('btn_montag');
let btn_dienstag = document.getElementById('btn_dienstag');
let btn_mittwoch = document.getElementById('btn_mittwoch');
let btn_donnerstag = document.getElementById('btn_donnerstag');

let montag = document.getElementById('montag');
let dienstag = document.getElementById('dienstag');
let mittwoch = document.getElementById('mittwoch');
let donnerstag = document.getElementById('donnerstag');

window.onload= () => {
    montag.style.display = 'block';
    dienstag.style.display = 'none';
    mittwoch.style.display = 'none';
    donnerstag.style.display = 'none';
}

btn_montag.addEventListener('click', () => {
    montag.style.display = 'block';
    dienstag.style.display = 'none';
    mittwoch.style.display = 'none';
    donnerstag.style.display = 'none';
});

btn_dienstag.addEventListener('click', () => {
    montag.style.display = 'none';
    dienstag.style.display = 'block';
    mittwoch.style.display = 'none';
    donnerstag.style.display = 'none';
});

btn_mittwoch.addEventListener('click', () => {
    montag.style.display = 'none';
    dienstag.style.display = 'none';
    mittwoch.style.display = 'block';
    donnerstag.style.display = 'none';
});

btn_donnerstag.addEventListener('click', () => {
    montag.style.display = 'none';
    dienstag.style.display = 'none';
    mittwoch.style.display = 'none';
    donnerstag.style.display = 'block';
});