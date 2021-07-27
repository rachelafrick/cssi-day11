const signIn  = () => {
     var provider = new firebase.auth.GoogleAuthProvider();
    console.log("sign in function run")
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
    window.location = "writeNote.html"
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email
    var credential = error.credential
    console.log("THINGS BROKE")
     console.log(error.code)
     console.log(error.message)

    // The email of the user

})
}

const signInButton = document.querySelector("#signInButton")
signInButton.addEventListener("click", signIn)