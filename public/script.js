// console.log("It works!");

var windowLoaded = function() {
  //alert('windon has loaded');  <- just a test to see if this function setted up correctly
  var form = document.forms[0];
  // console.log(form);  <- to check if data is add to right place
  if (form) {
    form.onsubmit = formValidator;
  }
  form.onsubmit = formValidator;
  // this is a function to add sertain event
};

var formValidator = function() {
  // debugger;
  var ageInput = this.querySelector('input[name=age]');
  var age = parseInt(ageInput.value);

  if (age < 18) {
    alert('You are too young to be using the web');
    return false;
  } else if (age > 100) {
    alert('You are too old to be using the web');
    return false;
  } else if (age.toString() == "NaN") {
    alert('You have to actually enter in a number');
    return false;
  }
  return true;
  // console.log(this);
};

window.onload = windowLoaded;
//when window.onload, this function windowLoarded works.
