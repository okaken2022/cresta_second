'use strict';
// ----------------ハンバーガーメニュー-------------------------

{
  const openBtn = document.querySelector('.openbtn');
  const mask = document.querySelector('.mask');
  const nav = document.querySelector('.ham-nav');

  openBtn.addEventListener('click', ()=> {
    openBtn.classList.toggle("active");
    mask.classList.toggle("active");
    nav.classList.toggle("active");
  });

  nav.addEventListener('click', ()=> {
    openBtn.classList.toggle("active");
    mask.classList.toggle("active");
    nav.classList.toggle("active");
  });
}
