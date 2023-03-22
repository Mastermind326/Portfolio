let paintButton = document.getElementById('#dasamoto');
let paint = document.getElementsByClassName('.paint');

let teaButton = document.getElementById('#tea');
let tea = document.getElementsByClassName('.tea');

let bikeButton = document.getElementById('#bike');
let bike = document.getElementsByClassName('.bike');

let open = () =>{
    paint.document.hidden = 'false';
}

paintButton.addEventListener('click',open);