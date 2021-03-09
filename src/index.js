const btn = document.querySelectorAll('.hamburger img');
const menuMobile = document.querySelector('.menu-container');
const logo = document.querySelector('.menu-logo');


btn.forEach(bt => {
    bt.addEventListener("click", function () {
        document.querySelector(".open").classList.toggle("active");
        document.querySelector(".close").classList.toggle("active");

        logo.classList.toggle("logo-mb");
        changeMenu(menuMobile)
    })
});

const changeMenu = menu => {
    menu.classList.toggle("menu-mobile");
    if (menu.classList.contains("menu-mobile")) {
        document.querySelectorAll(".menu-mobile li").forEach(item => {
            item.classList.remove('has-hover');
        });
        document.querySelector(".active").style.position = 'fixed';
    } else {
        document.querySelectorAll(".menu-container li").forEach(item => {
            item.classList.add('has-hover');
        })
    }
}