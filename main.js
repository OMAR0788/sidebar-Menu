const menuIcon = document.querySelector('.menuIcon'),
      sidebarXicon = document.querySelector('.xIcon'),
      overlay = document.querySelector('.overLay');


menuIcon.addEventListener('click', activeSidebarMenu);
sidebarXicon.addEventListener('click', hideSidebarMenu);
overlay.addEventListener('click', hideSidebarMenu);


function activeSidebarMenu(){
 document.querySelector(".sideMenu").classList.add("sideMenuActive");
 document.querySelector('.overLay').classList.add("overLayActive");
}

function hideSidebarMenu(){
    document.querySelector(".sideMenu").classList.remove("sideMenuActive");
    document.querySelector(".overLay").classList.remove("overLayActive");
}