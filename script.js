var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); 
}

function validateForm () {
  const name = document.forms["form"]["full-name"].value;
  const email = document.forms["form"]["email"].value;
  const optionSelect = document.forms["form"]["option"].value;

  if (name == "" || email == "" || option == "") {
    alert("data tidak boleh ada yang kosong");
    return false;
  }
  setSenderUI(name, email, option);
  return false
}

function setSenderUI(name, email, option) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-email").innerHTML = email;
  document.getElementById("sender-option").innerHTML = option;
}