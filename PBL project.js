function search(){
    let input = document.getElementById('search').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('books');
    let y = document.getElementsByClassName('list');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
            y.innerHTML="No matches found";
        }
    }

}
