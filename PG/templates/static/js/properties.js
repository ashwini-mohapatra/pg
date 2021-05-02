window.addEventListener('load',()=>{
   
    const params=(new URL(document.location)).searchParams;
    const location1=params.get('location');
    const type1 = params.get('type1');
    const type2 = params.get('type2');
    const category = params.get('category');
    document.getElementById('location').value=location1;
    console.log(location1);

const database=firebase.database();
const rootref=database.ref('Properties/');
var str=firebase.storage();


category1 = "";
type12 = "";
type22="";

if(category == 0){
    category1 = "Category";
}else if(category == 1){
    category1 = "Single";
}else if(category == 2){
    category1 = "Double";
}else if(category == 3){
    category1 = "Triple";
}

if(type1 == 0){
    type12 = "Type";
}else if(type1 == 1){
    type12 = "Girls Only";
}else if(type1 == 2){
    type12 = "Boys Only";
}else if(type1 == 3){
    type12 = "Mixed";
}

if(type2 == 0){
    type22 = "Type";
}else if(type2 ==1){
    type22 = "AC";
}else{
    type22 = "Non-AC";
}

rootref.child(location1).on('value',snapshot =>{
        var temp = []
        var a1 = false;
        var a2 = false;
        var a3 = false;
    
        if(type12 != "Type"){
          a1 = true;
        }
        if(type22 != "Type"){
          a2 = true;
        }
        if(category1 != "Category"){
          a3 = true;
        }
        
        snapshot.val().forEach((item)=>{
          if(a1 || a2 || a3){
    
            if( a1 && !a2 && !a3){
    
              if(type12 == item.child("Type1").value){
            
                temp.push(item);
                
              }
    
            }else if( !a1 && a2 && !a3){
    
              if(type22 == item.child("Type2").value){
            
                temp.push(item);
                
              }
    
            }else if( !a1 && !a2 && a3){
    
              if(category1 == item.child("Category").value){
            
                temp.push(item);
                
              }
    
            }else if( a1 && a2 && !a3){
    
              if((type12 == item.child("Type1").value) && (type22 == item.child("Type2").value)){
            
                temp.push(item);
                
              }
    
            }else if( !a1 && a2 && a3){
    
              if((type22 == item.child("Type2").value) && (category1 == item.child("Category").value)){
            
                temp.push(item);
                
              }
    
            }else if( a1 && !a2 && a3){
    
              if((type12 == item.child("Type1").value) && (category1 == item.child("Category").value)){
            
                temp.push(item);
                
              }
    
            }else if( a1 && a2 && a3){
              if((type12 == item.child("Type1").value) && (type22 == item.child("Type2").value) && (category1 == item.child("Category").value)){
            
                temp.push(item);
    
              }
            }
    
          }else{
    
            temp.push(item);
          
          }
        })
        properties.properties = temp
    });    
});