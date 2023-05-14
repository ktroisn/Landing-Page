function toggleMenu () {
    const main_navigation = document.querySelector('.main-navigation');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        main_navigation.classList.toggle('open-burger');
    })
}
toggleMenu();