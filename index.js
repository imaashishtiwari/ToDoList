var modal = document.getElementById("myModal"); //get the modal.

var btn = document.getElementById("myBtn"); //Get button to open modal.

var span = document.getElementsByClassName("close")[0]; //close the modal.

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.dispaly = "none";
    }
}

//slideer
