function search(){
    let input = document.getElementById('search').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('list');
    
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="inline-block";
            
        }
    }

}

let d = document.getElementsByClassName('list-img');
let c = document.getElementsByClassName('book-text');
let t = document.getElementsByClassName('list');


function disc(i){
    c[i].style.display = "block";
    d[i].style.display = "none";
    t[i].style.backgroundColor = "rgb(0, 132, 255)";
    t[i].style.height = "300px";
    t[i].style.width = "230px";
    d[i].style.height = "280px";
    d[i].style.width = "230px";

}

function up(i){
    c[i].style.display = "none";
    d[i].style.display = "block";
    t[i].style.backgroundColor = "white";

}

$(".list").mousedown(function() {
    
});

$(document).ready(function(){
    $(".list").mousedown(function(){
        var a = $(this).index(".list");
        $(".list").eq(a).css({"background-color":"rgb(0, 132, 255)","height":"300px","width":"230px",});
        $(".list-img").eq(a).css({"display":"none","height":"280px","width":"230px"});
        $(".book-text").eq(a).css({"display":"inline-block"});
    
        });
    $(".list").mouseleave(function(){
        var a = $(this).index(".list");
        $(".list").eq(a).css({"background-color":"white","height":"30%","width":"auto"});
        $(".list-img").eq(a).css({"display":"block","height":"250px","width":"200px"});
        $(".book-text").eq(a).css({"display":"none"});
        
        });

    $(".list").mouseenter(function(){
        var a = $(this).index(".list");
        $(".list-img").eq(a).css({"display":"block"});
        $(".list").eq(a).css({"background-color":"white"});
        $(".book-text").eq(a).css({"display":"none"});
        $(".list").eq(a).animate({height:'300px',width:'230px'},"fast");
        $(".list-img").eq(a).animate({height:'280px',width:'230px'},);
            
        });
            

    });
    
    

