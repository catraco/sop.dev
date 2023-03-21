const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const mobile_option = document.querySelectorAll(".mobile-option");
const select_language = document.querySelectorAll(".select-language");

Array.from(select_language).forEach( select => {
    select.addEventListener("change", e => { 
        if(e.target.value === "english") window.location = "/";
        else if(e.target.value === "arabic") window.location = "./sop_ar_version.html";
    });
});

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
})


mobile_option.forEach( option => {
    option.addEventListener('click', event => {
        menu_btn.classList.toggle('is-active')
        mobile_menu.classList.toggle('is-active')
    })
})