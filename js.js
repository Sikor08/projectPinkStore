'use strict'
let menu = document.querySelector('.menu');
let menuOpenClose = document.querySelector('.burger');
let menuClose = document.querySelector('.menu__close');
menuClose.onclick = () =>{
    menu.classList.add('hidden');
  };
  menuOpenClose.onclick = () =>{
    menu.classList.toggle('hidden');
  };

 