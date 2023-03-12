function changeBackground(id, color, fontcolor) {
        document.getElementById(id).style.background = color;
        document.getElementById(id).style.color = fontcolor;
           }

function printError(elemId, hintMsg) {
          document.getElementById(elemId).innerHTML = hintMsg;
          }
function ValidateForm() {
  var email = document.contactForm.email.value;
  var name =  document.contactForm.name.value;
  var mobile =  document.contactForm.phone.value;
  var address =  document.contactForm.address.value;
  var nameErr = emailErr = mobileErr = addressErr = true;
  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (name == "") {
    printError("nameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
  } else {
    var regex = /^[0-9]\d{10}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 11 digit mobile number");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }
  if (address == "") {
    printError("addressErr", "Please enter your address");
  } else {
    var regex = /^[1-9]\d{0,3}[a-zA-Z]+$/;
    if (regex.test(address) === false) {
      printError("addressErr", "Please enter a valid address");
    } else {
      printError("addressErr", "");
      addressErr = false;
    }
  }
  if ((nameErr || emailErr || mobileErr || addressErr) == true) {
    return false;
  } 
};