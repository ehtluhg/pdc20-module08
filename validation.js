function validate(){
    if (document.myForm.id.value==""){
        document.getElementById("idErr").innerHTML="Please enter your ID.";
        return false;
    }

    if (document.myForm.firstName.value==""){
        document.getElementById("firstNameErr").innerHTML="Please enter your first name.";
        return false;
    }

    if (document.myForm.lastName.value==""){
        document.getElementById("lastNameErr").innerHTML="Please enter your last name.";
        return false;
    }

    if (document.myForm.address.value==""){
        document.getElementById("addressErr").innerHTML="Please enter your address.";
        return false;
    }

    if (document.myForm.department.value==""){
        document.getElementById("departmentErr").innerHTML="Please enter your department.";
        return false;
    }

    if (document.myForm.position.value==""){
        document.getElementById("positionErr").innerHTML="Please enter your position.";
        return false;
    }

    // if (document.myForm.fullname.value==""){
    //     document.getElementById("nameErr").innerHTML="Please enter your name.";
    //     return false;
    // }

    if (document.myForm.email.value==""){
        document.getElementById("emailErr").innerHTML="Please enter your email address.";
        return false;
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(document.myForm.email.value)==false){
            alert("Please enter a valid email address.");
            return false;
        }
    }

    if (document.myForm.contactNumber.value==""){
        document.getElementById("contactNumberErr").innerHTML="Please enter your contact number.";
        return false;
    }

    if (document.myForm.salary.value==""){
        document.getElementById("salaryErr").innerHTML="Please enter your salary.";
        return false;
    }

    if (document.myForm.username.value==""){
        document.getElementById("usernameErr").innerHTML="Please enter your username.";
        return false;
    }
}