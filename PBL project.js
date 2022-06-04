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

let d = document.getElementsByClassName('list-img')[0];
let c = document.getElementsByClassName('book-text')[0];
let t = document.getElementsByClassName('list')[0];

function disc(){
    c.style.display = "block";
    d.style.display = "none";
    t.style.backgroundColor = "rgb(0, 132, 255)";
    t.style.height = "300px";
    t.style.width = "230px";
    d.style.height = "280px";
    d.style.width = "230px";

}

function up(){
    c.style.display = "none";
    d.style.display = "block";
    t.style.backgroundColor = "white";
    

}

    
