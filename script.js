function validate() {
    var full_name = document.password_form.full_name;
    var email_id = document.password_form.email_id;
    var phone_number = document.password_form.phone_number;
    var password = document.password_form.password;
    var confirm_password = document.password_form.confirm_password;
    
    if (full_name.value.length == 0) {
        document.getElementById("Name").innerHTML="Name is required.";
        return false;
    }

    if (full_name.value.length < 5){
        document.getElementById("Name").innerHTML="Name should be with minimum 5 character.";
        return false;
    }

    if (email_id.value.length < 0 || email_id.value.indexOf("@") < 0 || email_id.value.lastIndexOf(".") < email_id.value.indexOf("@") + 1 || email_id.value.lastIndexOf(".") > email_id.value.length - 1) {
        document.getElementById("Email").innerHTML="Enter valid Email ID.";
        return false;
    }
 

    if (phone_number.value.length < 10 || phone_number.value.length > 10 ) {
        document.getElementById("Number").innerHTML="Enter valid Phone Number.";
        return false;
    }

    if (password.value.length == 0) {
        document.getElementById("Password").innerHTML="Password is required.";
        return false;
    }


    if (password.value == "password" || password.value == "Password" || password.value == "PASSWORD" ) {
        document.getElementById("Password").innerHTML="Password cannot be'password' or 'Password' or 'PASSWORD'.";
        return false;
    }
    
    if ( password.value == full_name.value) {
        document.getElementById("Password").innerHTML="Password cannot be your name.";
        return false;
    }

    if (password.value.length < 8) {
        document.getElementById("Password").innerHTML="Password should be with minimum 8 character.";
        return false;
    }

    if (confirm_password.value != password.value) {
        document.getElementById("ConfrimPassword").innerHTML="Enter same password as above.";
        return false;
    }

alert("Submit password setup form ?")
return true;

}

function userValidation() {
    document.getElementById("Name").innerHTML=" ";
}

function userValidation1() {
    document.getElementById("Email").innerHTML=" ";
}

function userValidation2() {
    document.getElementById("Number").innerHTML=" ";
}

function userValidation3() {
    document.getElementById("Password").innerHTML=" ";
}

function userValidation4() {
    document.getElementById("ConfrimPassword").innerHTML=" ";
}