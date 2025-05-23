
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Если прокрутка больше 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});









// Добавьте в script.js
document.addEventListener('DOMContentLoaded', function() {
    // Создаем бургер-меню для мобильных
    const burgerBtn = document.createElement('button');
    burgerBtn.className = 'burger-menu';
    burgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
    burgerBtn.style.display = 'none';
    
    const header = document.querySelector('.header-inner');
    header.appendChild(burgerBtn);
    
    // Показываем бургер на мобильных
    function checkScreenSize() {
        if (window.innerWidth <= 992) {
            burgerBtn.style.display = 'block';
            document.querySelector('.nav').style.display = 'none';
        } else {
            burgerBtn.style.display = 'none';
            document.querySelector('.nav').style.display = 'block';
        }
    }
    
    // Проверяем при загрузке и изменении размера
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Обработчик клика по бургеру
    burgerBtn.addEventListener('click', function() {
        const nav = document.querySelector('.nav');
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});