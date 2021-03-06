'use strict';
{
  const swiper = new Swiper(".swiper", {
    // ページネーションが必要なら追加
    pagination: {
      el: ".swiper-pagination"
    },
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}
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
