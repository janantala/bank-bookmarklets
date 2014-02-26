javascript:(

	/*************** mBank LOGIN ***************/

	function(){
		var LOGIN_ID = "00000000" // your login id
		var PASSWORD = "password" // your password
		var URL = "https://sk.mbank.eu/" // bank login url

		document.location.href = URL;
		document.getElementById("customer").value = LOGIN_ID;
		document.getElementById("password").value = PASSWORD;
		document.getElementById("confirm").click();
	}
)();
