

function openBtn(){
    document.getElementById("btnOpen").style.display = "none"
    document.getElementById("btnClose").style.display = "flex"
    document.getElementById("topNavBar").style.display ="flex"
}


function closeBtn(){

    document.getElementById("topNavBar").style.display ="none"
    document.getElementById("btnOpen").style.display = "flex"
    document.getElementById("btnClose").style.display = "none"
   
}