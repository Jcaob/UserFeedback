
var logInBtn = document.getElementById("logIn")

logInBtn.addEventListener("click", logIn)


async function logIn(){
    console.log("signed in")
    location.replace("../loggedIn.html")
}












function initListeners() {

    $("#home").on("click", (e) =>{
        $("#modal").toggle();
    })
    $(".close").on("click", (e) =>{
        $("#modal").toggle();
    })

    
}

$(document).ready(function () {
initListeners();
});