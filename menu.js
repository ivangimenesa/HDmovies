function menuopen() {
    document.getElementById("menu").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function menuclose() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
    document.body.style.backgroundColor = "#272727";
}
