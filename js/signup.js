window.onload=function(){

    const login=document.getElementById('login');
    const signup=document.getElementById('signup');
    
    const email1=document.getElementById('email1');
    const password1=document.getElementById('password1');
    const name1=document.getElementById('name1');
      
    const database=firebase.database();
    const rootref=database.ref('Users/');

    signup.addEventListener('click', ()=>{
      
      firebase.auth().createUserWithEmailAndPassword(email1.value, password1.value)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user.uid);
        if(user.uid!=null){
          window.open("index.html","_self");
        }
        
      //   database.ref('/Users/'+user.uid).set({
      // 	'name': name1.value,
      // 	'email': email.value
      // });
      // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      // ..
      });
    });
  }