


//Login Function
function login() {

    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var close = document.getElementById("close");
    var loaderhide = document.getElementById("loader");
    var text = document.getElementById("text");
    var infor = document.getElementById("infor");

    $(function () {
        $("#loader").toggle();
    });

    if (firebase.auth().currentUser) {
        // [START signout]
        loaderhide.style.display = "none";

        text.value = "User already logged in";
        infor.value = "Error";
        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
        }

        close.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        // [END signout]
    } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            loaderhide.style.display = "none";

            text.value = "Please enter a valid email address";
            infor.value = "Error";
            modal.style.display = "block";

 
            span.onclick = function () {
                modal.style.display = "none";
            }
            close.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            return;
        }
        if (password.length < 7) {
            loaderhide.style.display = "none";

            text.value = "Password length should be greater tha 6 characters";
            infor.value = "Error";
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            }
            close.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            return;
        }
    }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
                loaderhide.style.display = "none";

                text.value = "Wrong Email and/or Password";
                infor.value = "Error";
                modal.style.display = "block";

                span.onclick = function () {
                    modal.style.display = "none";
                }
                close.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            } else {
                loaderhide.style.display = "none";
                infor.value = "Error";
                text.value = "User not found";
                modal.style.display = "block";

               
                span.onclick = function () {
                    modal.style.display = "none";
                }
                close.onclick = function () {
                    modal.style.display = "none";
                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
                document.getElementById('email').value = "";
                document.getElementById('password').value = "";
            }
            console.log(error);
            // [END_EXCLUDE]
        });

        // [END authwithemail]  
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var loaderhide = document.getElementById("loader");
                loaderhide.style.display = "none";


                modal.style.display = "block";
                text.value = "Login Successful"
                infor.value = "Success";
                span.onclick = function () {
                    modal.style.display = "none";
                    window.location = 'HomePage.html';
                }
                close.onclick = function () {
                    modal.style.display = "none";
                    window.location = 'HomePage.html';

                }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                        window.location = 'HomePage.html';
                    }
                    

                }
                
            }
        });
    };










  // Sign Up function 
function register() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var close = document.getElementById("close");
    var text = document.getElementById("text");
    var loaderhide = document.getElementById("loader1");
    var infor = document.getElementById("infor");
  
    $(function () {
        $("#loader1").toggle();
    });

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {

        loaderhide.style.display = "none";
        text.value = "Please enter a valid email";
        infor.value = "Error";

        modal.style.display = "block";


        span.onclick = function () {
            modal.style.display = "none";
        }
        close.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        return;
    }
    if (password.length < 7) {

        loaderhide.style.display = "none";
        text.value = "Password length should be greater than 6 characters";
        infor.value = "Error";

        modal.style.display = "block";
        document.getElementById('password').value = "";


        span.onclick = function () {
            modal.style.display = "none";
        }
        close.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        return;
    }

    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var loaderhide = document.getElementById("loader1");
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
            
            loaderhide.style.display = "none";
            text.value = "Please enter a valid email";
            infor.value = "Error";
            modal.style.display = "block";

           
            span.onclick = function () {
                modal.style.display = "none";
            }
            close.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }

        if (errorCode == 'auth/email-already-in-use') {
            var loaderhide = document.getElementById("loader1");
            loaderhide.style.display = "none";
            text.value = "The email address is already in use by another account";
            infor.value = "Error";
            modal.style.display = "block";

            
            span.onclick = function () {
                modal.style.display = "none";
            }
            close.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }

        if (errorCode == 'auth/weak-password') {
            var loaderhide = document.getElementById("loader1");
            loaderhide.style.display = "none";
            text.value = "Password too weak";
            infor.value = "Error";
            modal.style.display = "block";
            
            span.onclick = function () {
                modal.style.display = "none";
            }
            close.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        } 
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var loaderhide = document.getElementById("loader1");
            loaderhide.style.display = "none";
            text.value = "Registration Successful";
            infor.value = "Success";
            modal.style.display = "block";
            span.onclick = function () {
                modal.style.display = "none";
                window.location = 'HomePage.html';
            }
            close.onclick = function () {
                modal.style.display = "none";
                window.location = 'HomePage.html';
            }
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                        window.location = 'HomePage.html';
                    }
                   

                }
        }
        });

};





function initApp() {
    firebase.auth().onAuthStateChanged(function (user) {
        // [START_EXCLUDE silent]
        // [END_EXCLUDE]
        if (user) {
            // User is signed in.
            var email = user.email;
            var uid = user.uid;
            var providerData = user.providerData;
            // [START_EXCLUDE]
            document.getElementById('info').value = email;

            $(function () {
                $("#sign").hide();
            });

            $(function () {
                $("#usericon").show();
            });

            $(function () {
                $("#sign1").show();
            });

            // [END_EXCLUDE]
        } else {
            // User is signed out.
            // [START_EXCLUDE]
            $(function () { $("#usericon").hide() });
            $(function () { $("#sign").show() });
            $(function () { $("#sign1").hide() });
            // [END_EXCLUDE]
        }
    });
};





//Send Password Reset
function sendPasswordReset() {
      var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        var close = document.getElementById("close");
        var text = document.getElementById("text");
        var infor = document.getElementById("infor");
    
        text.value = "Password reset email sent";
        infor.value = "Success";
        modal.style.display = "block";
    
        span.onclick = function () {
            modal.style.display = "none";
        }
    
        close.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          var modal = document.getElementById('myModal');
          var span = document.getElementsByClassName("close")[0];
          var close = document.getElementById("close");
          var text = document.getElementById("text");
          var infor = document.getElementById("infor");
      
          text.value = "Please enter a valid email";
          infor.value = "Error";
          modal.style.display = "block";
      
          span.onclick = function () {
              modal.style.display = "none";
          }
      
          close.onclick = function () {
              modal.style.display = "none";
          }
          window.onclick = function (event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
          }
        } else if (errorCode == 'auth/user-not-found') {
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            var close = document.getElementById("close");
            var text = document.getElementById("text");
            var infor = document.getElementById("infor");
        
            text.value = "User not found";
            infor.value = "Error";
            modal.style.display = "block";
        
            span.onclick = function () {
                modal.style.display = "none";
            }
        
            close.onclick = function () {
                modal.style.display = "none";
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }




//signout
function logout() {
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
           
        }
        else {
            // User is signed out.
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            var close = document.getElementById("close");
            var text = document.getElementById("text");
            var infor = document.getElementById("infor");
        
            text.value = "Logout Successful";
            infor.value = "Success";
            modal.style.display = "block";
        
            span.onclick = function () {
                modal.style.display = "none";
                window.location = 'HomePage.html';
            }
        
            close.onclick = function () {
                modal.style.display = "none";
                window.location = 'HomePage.html';
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    window.location = 'HomePage.html';
                }
            }

        }
    });
};




//Prevent access to services without login
function checkuser() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            var close = document.getElementById("close");
            var text = document.getElementById("text");
            var infor = document.getElementById("infor");
        
            text.value = "This service is still under development. Check back later";
            infor.value = "Sorry";
            modal.style.display = "block";
        
            span.onclick = function () {
                modal.style.display = "none";
                window.location = 'HomePage.html';
            }
        
            close.onclick = function () {
                modal.style.display = "none";
                window.location = 'HomePage.html';
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    window.location = 'HomePage.html';
                }
            }
        }
        else {

            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            var close = document.getElementById("close");
            var text = document.getElementById("text");
            var infor = document.getElementById("infor");
        
            text.value = "Please Sign Up or Login in order to access our services";
            infor.value = "Alert";
            modal.style.display = "block";
        
            span.onclick = function () {
                modal.style.display = "none";
                window.location = 'HomePage.html';
            }
        
            close.onclick = function () {
                modal.style.display = "none";
                window.location = 'HomePage.html';
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    window.location = 'HomePage.html';
                }
            }
        }
    });
};


function checkuser1() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            
        }
        else {

            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            var close = document.getElementById("close");
            var text = document.getElementById("text");
            var infor = document.getElementById("infor");
        
            text.value = "Please Sign Up or Login in order to access our services";
            infor.value = "Alert";
            modal.style.display = "block";
        
            span.onclick = function () {
                modal.style.display = "none";
                window.location = 'HomePage.html';
            }
        
            close.onclick = function () {
                modal.style.display = "none";
                window.location = 'HomePage.html';
            }
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                    window.location = 'HomePage.html';
                }
            }
        };
    });
};





