

<!DOCTYPE html>
<html>
<head>
<title>Passwords</title>
</head>

<body>

<form onSubmit="return checkPassword();">
  Enter a password<br>
  (8-12 characters, at least 1 number, no spaces)<br>
  <input type="text" id="f1">
  <input type="submit" value="Submit">
</form>

<script>

function checkPassword() {
  try {
    var pass = document.getElementById("f1").value;
    if (pass.length < 8) {
      throw "Please enter at least 8 characters.";
    }
    if (pass.indexOf(" ") !== -1) {
      throw "No spaces in the password, please.";
    }
    var numberSomewhere = false;
	for (var i = 0; i < pass.length; i++) {
	  if (isNaN(pass[i, i+1]) === false) {
	    numberSomewhere = true;
		break;
	  }
	 if (numberSomewhere === false) {
	   throw "Include at least 1 number.";
	 }
	}
	
  }
  catch(err) {
	  alert(err);
  }
}


</script>

</body>
</html>