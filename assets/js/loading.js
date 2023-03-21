const loading_page = document.querySelector(".loading-page");

function remove_loading_page(){

  loading_page.style.display = "none";

}

window.onload = () => {

  remove_loading_page();

}