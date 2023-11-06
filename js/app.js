//open sidebar
let sidebarBtn = document.querySelector(`.sidebarBtn`);
let sidebar = document.querySelector(`.sidebar`);

function openSidebar (){
    sidebar.classList.add(`active`);
}

sidebarBtn.addEventListener(`click`, openSidebar);

//close sidebar
let crossbtn = document.querySelector(`.crossbtn`);

function closeSidebar (event) {
    sidebar.classList.remove(`active`);
}
crossbtn.addEventListener(`click`, closeSidebar);

//darkmode starts
let darkBtn = document.querySelector(`.darkModeBtn`);
let body = document.querySelector(`body`);
let headding = document.querySelector(`nav p`);

function darkmode () {
    body.classList.toggle(`darkmode`);
    if(body.classList.contains(`darkmode`)){
        headding.innerHTML = "Dark Mode";
    } else{
        headding.innerHTML = "Light Mode";
    }
}
darkBtn.addEventListener(`click`, darkmode);