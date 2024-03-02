//creation de 2 variable et on leur donne leur valeur
var userStorage = "Username";
var passwordStorage = "Password";

//on ramene le id01
var modal = document.getElementById("id01");

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  var modal2 = document.getElementById("id01");
  
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }
  //code pour enregistrer les informations dans le local storage
  function Register(){
      var RegisterUser = document.getElementById("usernameInfo").value;
      var RegisterPassword = document.getElementById("pswInfo").value;
      var RegisterPasswordRepeat = document.getElementById("pswInfoRepeat").value;
  
      if (RegisterPassword == RegisterPasswordRepeat){
        localStorage.setItem(userStorage+RegisterUser, RegisterUser);
        localStorage.setItem(passwordStorage+RegisterPassword, RegisterPassword);
        document.getElementById('id02').style.display='none'
      }
      else{
          alert("Your passwords are not identical");
      }
      
  }
  //code pour verifier si les informations pour se connecter sont valides
  function LogIn(){
    var logInUser = document.getElementById("usernameLogIn").value;
    var logInPassword = document.getElementById("passwordLogIn").value;
  
    var userAttempt = localStorage.getItem(userStorage+logInUser, logInUser);
    var passAttempt= localStorage.getItem(passwordStorage+logInPassword, logInPassword);
  
    if (logInUser == userAttempt && logInPassword == passAttempt){
      window.location.replace("tache.html");
    }
    else{
      alert("One or both information isn't correct");
    }
  
  }





