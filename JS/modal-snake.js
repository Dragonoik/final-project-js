 var modaL = document.getElementById("my_modal_snake");
 var btN = document.getElementById("btn_modal_snake");
 var spaN = document.getElementsByClassName("close_modal_window_snake")[0];

 btN.onclick = function () {
    modaL.style.display = "block";
 }

 spaN.onclick = function () {
    modaL.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modaL.style.display = "none";
    }
}