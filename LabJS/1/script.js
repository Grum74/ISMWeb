var far = document.querySelector("#far");
var cel = document.querySelector("#cel");

far.onkeyup = function () {
    cel.value = 5/9 * (far.value-32);
    if(far.value == ""){
        cel.value="";
    }
}

cel.onkeyup = function () {
    far.value = (cel.value * 9/5) + 32;
    if(cel.value == ""){
        far.value="";
    }
}