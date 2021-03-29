const resetemail=document.getElementById('resetemail');
const resetpass=document.getElementById('resetpass');

resetpass.addEventListener('click',()=>{
    firebase.auth().sendPasswordResetEmail(resetemail.value).then(function(){
      console.log("Email Sent");
    }).catch(function(error){
      console.log(error.message);
    });
  });
  