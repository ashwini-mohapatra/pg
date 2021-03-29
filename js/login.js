const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const login=document.getElementById('login');
const signup=document.getElementById('signup');
const email=document.getElementById('email');
const password=document.getElementById('password');
const name1=document.getElementById('name');
const email1=document.getElementById('email1');
const password1=document.getElementById('password1');

const glogin=document.getElementById('glogin');
const flogin=document.getElementById('flogin');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const database=firebase.database();
const rootref=database.ref('Users/');

glogin.addEventListener('click',()=>{

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

firebase.auth()
.signInWithPopup(provider)
.then((result) => {
  /** @type {firebase.auth.OAuthCredential} */
  var credential = result.credential;

  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user.uid);
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
})

flogin.addEventListener('click',()=>{

  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().useDeviceLanguage();
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;
    console.log(user.uid);
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage);
    // ...
  });
});


login.addEventListener('click', ()=>{

	firebase.auth().signInWithEmailAndPassword(email1.value, password1.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
	  console.log(user.uid);
	// ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
	console.log(errorMessage);
});

});

// signup.click(function(){
//   firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
// 	database.rootref().ref('Users/'+user.uid).set({
// 		'name': name1.value,
// 		'email': email.value
// 	});
// 	console.log(user.uid);
// 	// ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage);
// 	// ..
//   });
// });

signup.addEventListener('click', ()=>{

	firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user.uid);
    database.ref('/Users/'+user.uid).set({
		'name': name1.value,
		'email': email.value
	});
	// ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
	// ..
  });

});