'use strict';

//elemento a observar Phone
const inputPhone = document.querySelector('#phone');
const previewPhone = document.querySelector('.phone__icon');

//handler
function writePhone(event){
    if (!inputPhone.value){
        previewPhone.classList.add('hide');
    } else {
        previewPhone.href = ('tel:' + inputPhone.value);
        previewPhone.classList.remove('hide');
    }
}

//listener
inputPhone.addEventListener('keyup', writePhone);
//Name and position
const previewName=document.querySelector('.name');
const inputName=document.querySelector('#name');
const previewJob=document.querySelector('.job');
const inputJob=document.querySelector('#position');


function writeName(event){
    previewName.innerHTML=inputName.value || "Nombre Apellido";
}
inputName.addEventListener('keyup', writeName);

function writePosition(event){
    previewJob.innerHTML=inputJob.value || "Front-end developer";
}
inputJob.addEventListener('keyup', writePosition);


//Github
const inputGithub = document.getElementById('github');
const previewGithub = document.querySelector('.github');

function writeGithub(event){
    const textGithub = event.currentTarget;

    previewGithub.href = textGithub.value;
}

inputGithub.addEventListener('keyup', writeGithub);

//Mail
const inputMail = document.getElementById('email');

function writeMail() {
    const yourEmail=inputMail.value;
    const previewMail=document.querySelector(".buttonMail");    
    if (!yourEmail){
        previewMail.classList.add("hide");
    }else{
        previewMail.classList.remove("hide");
        previewMail.href=`mailto:${yourEmail}`;
    }
}
inputMail.addEventListener('keyup',writeMail);

// THEMES

const cardContainerEl = document.querySelector('.card__preview');
const themeGreenEl= document.getElementById('theme-green');
const themeRedEl= document.getElementById('theme-red');
const themeGreyEl= document.getElementById('theme-grey');



 function changeTheme(event){

const red=document.querySelector('input[value=red]');
const grey=document.querySelector('input[value=grey]');
    if (red.checked){
       cardContainerEl.classList.add('theme--red');
       cardContainerEl.classList.remove('theme--grey');
    }
    else if (grey.checked){
    cardContainerEl.classList.add('theme--grey');
    cardContainerEl.classList.remove('theme--red');
    }
    else{
    cardContainerEl.classList.remove('theme--grey', 'theme--red');
    }
}




//       if (themeRedEl= event.checked=true){
//          cardContainerEl.classList.add('theme--red');
//       }
//       else if (themeGreyEl.checked=true){
//           cardContainerEl.classList.add('theme--grey');
//       }
//   }

// // function hanlerThemeSelection(event){

// // }

themeGreenEl.addEventListener('click', changeTheme);
themeRedEl.addEventListener('click', changeTheme);
themeGreyEl.addEventListener('click', changeTheme);
