javascript:(
  
  /*************** UniCredit Bank LOGIN ***************/

  function(){
    var LOGIN_ID = "00000000" // your login id
    var PASSWORD = "1234567890" // your password
    var URL = "https://sk.unicreditbanking.net/disp?link=login.tplogin.system_login" // bank login url

    if (document.location.href !== URL){
      document.location.href = URL;
    }
    else {
      var id = document.getElementsByTagName('input')[8];
      id.value = LOGIN_ID;
      id.focus();
      var pass = document.getElementsByTagName('input')[9];
      pass.value =PASSWORD;
      pass.focus();
    }
  }
)();
