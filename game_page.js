var name1 =localStorage.getItem("name1");
var name2 =localStorage.getItem("name2");
var player1score=0;
var player2score=0;
var word;
var lengthhalf2;
var lengthminus1;
var charat1,charat2,charat3;
var remove_charat1,remove_charat2,remove_charat3;
var question,input,checkbutton;
var row;
console.log(name1);
console.log(name2);

document.getElementById("name1").innerHTML=name1+":";
document.getElementById("name2").innerHTML=name2+":";

document.getElementById("score1").innerHTML=player1score;
document.getElementById("score2").innerHTML=player2score;

document.getElementById("question").innerHTML ="Question Turn : "+name1;
document.getElementById("answer").innerHTML ="Answer Turn : "+name2;

function send(){
    word=document.getElementById("word").value;
    word=word.toLowerCase();

    charat1 =word.charAt(0);

    lengthhalf2=Math.floor(word.length/2);
    charat2=word.charAt(lengthhalf2);

    lengthminus1=word.length-1;
    charat3=word.charAt(lengthminus1);

    remove_charat1=word.replace(charat1,"_");
    remove_charat2=remove_charat1.replace(charat2,"_");
    remove_charat3=remove_charat2.replace(charat3,"_");
    console.log(remove_charat3);

    question="<h3 class='libre-franklin text-white'>Q. "+remove_charat3+"</h3><br>";
    input="<input class='col-lg-6 col-md-8 col-sm-10 col-xs-12 form-control libre-franklin' id='answer' type='text' placeholder='Enter Answer'><br>";
    checkbutton="<button class='btn btn-success' onclick='check()'>Check</button>";
    row=question + input +checkbutton;
    document.getElementById("game-area").innerHTML=row;
    document.getElementById("word").value="";
}