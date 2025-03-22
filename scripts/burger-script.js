document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;
  
    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('no-scroll'); // Добавляем/убираем класс для блокировки скролла
    });
  
    // Закрытие меню после выбора пункта
    document.querySelectorAll('.mobile-nav-list a').forEach(function(link) {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('no-scroll'); // Убираем класс для блокировки скролла
        });
    });
  });