window.onload = function() {
    swal({
    title : "THANKS FOR WATCHING.",
    type : "success",
    html : true
});
let themeSwitcher = document.querySelector('.themeSwitch');
let bodyStyle = document.querySelector('body');

themeSwitcher.onclick = function(){
  bodyStyle.classList.toggle('dark');
}
}