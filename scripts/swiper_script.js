document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    loop: true, // Бесконечный слайдер
    effect: 'cards', // Эффект "карт"
    cardsEffect: {
      slideShadows: false, // Отключаем тени для чистого вида
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000, // Автоперелистывание каждые 3 секунды
    },
  });
});