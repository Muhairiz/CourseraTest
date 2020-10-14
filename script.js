function validate() {
	var first =document.myForm.fname;
	var last =document.myForm.lname;
	var email = document.myForm.email;

	if(first.value == ""){
		alert("Enter your first name");;
		first.focus();
		return false;
	}else if (!isNaN(first.value)) {
		document.getElementById('s-fname').innerHTML = "* First name must be characters not a number";
		first.focus();
		return false;
	}else if(first.value.length < 3){
		document.getElementById('s-fname').innerHTML = "* Name nust be contain at least 3 characters";
		first.focus();
		return false;
	}

	if(last.value == ""){
		document.getElementById('s-lname').innerHTML = "* Please enter your last name";
		last.focus();
		return false;
	}else if (!isNaN(last.value)) {
		document.getElementById('s-lname').innerHTML = "* First name must be characters not a number";
		last.focus();
		return false;
	}else if(last.value.length < 3){
		document.getElementById('s-lname').innerHTML = "* Name nust be contain at least 3 characters";
		last.focus();
		return false;
	}

	if(email.value == ""){
		document.getElementById('s-lname').innerHTML = "* Please enter your email name";
		email.focus();
		return false;
	}else if (!isNaN(email.value)) {
		document.getElementById('s-lname').innerHTML = "* First name must be characters not a number";
		email.focus();
		return false;
	}

	return true;
}		