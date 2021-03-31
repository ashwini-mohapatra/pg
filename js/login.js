window.onload=function(){

  const login=document.getElementById('login');
    
  const email=document.getElementById('email');
  const password=document.getElementById('password');
  
  const glogin=document.getElementById('glogin');
  
  glogin.addEventListener('click',()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().useDeviceLanguage();
  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then((result) => {
    var credential = result.credential;
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user.uid);
    if(user.uid!=null){
      window.open("index.html","_self");
    }
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log(errorMessage);
  });
  });
  
  
  login.addEventListener('click', ()=>{
  
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      if(user.uid!=null){
        window.open("index.html","_self");
      }
      console.log(user.uid);
    // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    console.log(errorMessage);
  });
  });
  
}