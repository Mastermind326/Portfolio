let paintButton = document.getElementById('dasamoto');

let teaButton = document.getElementById('tea');
let tea = document.getElementsByClassName('tea');

let bikeButton = document.getElementById('bike');
let bike = document.getElementsByClassName('bike');

let toggle = () =>{
    let paint = document.querySelectorAll('.paint');
    if(paint[0].style.display === 'none'){
    return paint[0].style.display = 'block';
    }
    else{return paint[0].style.display = 'none'}
};

paintButton.addEventListener('click',toggle);

let toggle2 = () =>{
    let tea = document.querySelectorAll('.tea');
    if(tea[0].style.display === 'none'){
    return tea[0].style.display = 'block';
    }
    else{return tea[0].style.display = 'none'}
};

teaButton.addEventListener('click',toggle2);

let toggle3 = () =>{
    let bike = document.querySelectorAll('.bike');
    if(bike[0].style.display === 'none'){
    return bike[0].style.display = 'block';
    }
    else{return bike[0].style.display = 'none'}
};

bikeButton.addEventListener('click',toggle3);