var name1;
var name2;
function start(){
    name1=document.getElementById("name1").value;
    name2=document.getElementById("name2").value;
    localStorage.setItem("name1" ,name1);
    localStorage.setItem("name2" ,name2);
    window.location="game_page.html";
}