
document.addEventListener("DOMContentLoaded",function(){

    var col1 = document.getElementById("color-box")
    var col2 = document.getElementById("change-color-btn")

    function getRandomColor (){
        var r =Math.floor(Math.random() * 256);
        var g=Math.floor(Math.random() * 256);
        var b=Math.floor(Math.random() * 256);

   return `rgb( ${r},${g},${b})`
    
    }

col2.addEventListener("click",function(){
    col1.style.backgroundColor=getRandomColor()
})

})
/*
col1.addEventListener("DOMContentLoaded", function (){
    getRandomColor()
})
var col2 = document.getElementById("change-color-btn")
col2.addEventListener("DOMContentLoaded", function (){
    getRandomColor()
})

function getRandomColor (){
    var r =Math.floor(Math.random ()*256);
    var g=Math.floor(Math.random ()*256);
    var b=Math.floor(Math.random ()*256);
var hex = "rgb("+ r + "," + g + "," + b + ")"

var change = document.getElementById("color-box")
change.addEventListener("click", function() {
    change.setAttribute("style", "backgroundColor=hex")
})
return change
}*/