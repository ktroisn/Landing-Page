function toggleMenu () {
    const main_navigation = document.querySelector('.main-navigation');
    const burger = document.querySelector('.burger');
    const menu_items = main_navigation.querySelectorAll('a');
    burger.addEventListener('click', () => {
        main_navigation.classList.toggle('open-burger');
    });

    menu_items.forEach(item => {
        item.addEventListener('click', () => {
            main_navigation.classList.remove('open-burger');
        });
    });
}
toggleMenu();