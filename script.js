let paintButton = document.getElementById('dasamoto');
let paint = document.querySelectorAll('.paint');

let teaButton = document.getElementById('tea');
let tea = document.getElementsByClassName('tea');

let bikeButton = document.getElementById('bike');
let bike = document.getElementsByClassName('bike');

let open = () =>{
    paint.style.display = 'block';
}

paintButton.addEventListener('click',open);
