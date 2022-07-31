'use strict';
let list = document.getElementById('list');
let submit = document.getElementById('sbt');
let input = document.getElementById('txt');
let reset = document.getElementById('res');
submit.addEventListener('click', function () {
  const para = document.createElement('p');
  para.setAttribute('id', 'parag');
  para.textContent = input.value;
  list.appendChild(para);
  input.value = '';
  para.style.cursor = 'pointer';

  const pgf = document.querySelectorAll('p');
  for (let i = 0; i < pgf.length; i++) {
    para.onclick = () => {
      para.style.textDecoration = 'line-through';
    };
  }
});

reset.addEventListener('click', function () {
  list.textContent = '';
  input.value = '';
});
