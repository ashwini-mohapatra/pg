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

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const database=firebase.database();
const rootref=database.ref('Users/');

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
	database.ref('Users/'+user.uid).set({
		'name': name1.value,
		'email': email.value
	});
	console.log(user.uid);
	// ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
	// ..
  });

});