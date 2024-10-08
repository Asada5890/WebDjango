// Получаем все пункты меню
const navLinks = document.querySelectorAll('.nav-list a');

// Обрабатываем клики по пунктам меню
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Получаем идентификатор секции, к которой нужно переместиться
    const sectionId = link.getAttribute('href');
    // Получаем секцию по идентификатору
    const section = document.querySelector(sectionId);
    // Плавно перемещаем к секции с смещением от верхнего края окна
    section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    // Предотвращаем стандартное поведение ссылки
    e.preventDefault();
  });
});