javascript:(

  /*************** mBank LOGIN ***************/

  function(){
    var LOGIN_ID = "00000000" // your login id
    var PASSWORD = "password" // your password
    var URL = "https://online.mbank.sk/sk/Login" // bank login url

    if (document.location.href !== URL){
      document.location.href = URL;
    }
    else {
      document.getElementById("userID").value = LOGIN_ID;
      document.getElementById("userID").focus();
      document.getElementById("pass").value = PASSWORD;
      document.getElementById("pass").focus();
    }
  }
)();
