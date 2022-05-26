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

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


/* form link */

function validForm(){
  let name = document.myForm.firstName.value;
  let password = document.myForm.enterPassword.value;

  if (name == null || name == ""){
    alert ("Please enter your name and password.");
    return false;
  } else if(password.length<6){
    alert("Password must be 6 character long.");
    return false;
  }
}

/* form link end */