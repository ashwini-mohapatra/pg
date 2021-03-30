window.onload=function(){
    
    const resetemail=document.getElementById('resetemail');
    const resetpass=document.getElementById('resetpass');
  
    resetpass.addEventListener('click',()=>{
        firebase.auth().sendPasswordResetEmail(resetemail.value).then(function(){
          window.open("login.html","_self");      
        }).catch(function(error){
          console.log(error.message);
        });
      });
  }