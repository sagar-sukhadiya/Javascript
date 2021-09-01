// var a = 0;
// var id = setInterval(Anim,500);

// function Anim(){
//     a = a + 10;
//     if(a==200)
//     {
//         clearInterval(id);
//     }
//     else
//     {
//         var target = document.getElementById("test");
//         target.style.marginLeft= a + "px";
//     }
// }

var id = setTimeout(Anim,800)

function Anim()
{
    var target = document.getElementById("test");
    target.style.width="250px"
}

function stopAnimation(){
    clearTimeout(id);
}
