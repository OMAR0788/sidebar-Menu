const menuIcon = document.querySelector('.menuIcon'),
      sidebarXicon = document.querySelector('.xIcon'),
      overlay = document.querySelector('.overLay');


menuIcon.addEventListener('click', sidebarMenuToggle);
sidebarXicon.addEventListener('click', sidebarMenuToggle);
overlay.addEventListener('click', sidebarMenuToggle);


function sidebarMenuToggle(){
 document.querySelector(".sideMenu").classList.toggle("sideMenuActive");
 document.querySelector('.overLay').classList.toggle("overLayActive");
}