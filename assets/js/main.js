const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const mobile_option = document.querySelectorAll(".mobile-option");
const select_language = document.querySelectorAll(".select-language");

function setup(){

    Array.from(select_language).forEach( select => {
        select.addEventListener("change", e => { 
            if(e.target.value === "english") window.location = "./sop.html";
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

}

setup();

(()=>{let d=new Date();d.getHours()===8&&d.getMinutes()===8&&d.getSeconds()===8?document.querySelector("body").style.filter="blur(5px)":d.getHours();})();