//get model
var modal = document.getElementById('id01');

//when user click anywhere outside of the model,close it

  window.onclick = function(event) {
    if(event.target === modal){
        modal.style.display = "none";
    }

};

  /* show password*/

  function showpaas() {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
          x.type = "text";
      } else {
          x.type = "password";
      }
  }


  /* validate email */

  function validateForm(inputText) {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(inputText.value.match(mailformat))
      {
        /*  document.myForm.uname.focus(); */
          return true;
      }
      else
      {
          alert("You have entered an invalid email address!");
        /*  document.myForm.uname.focus(); */
           return false;
      }
  }