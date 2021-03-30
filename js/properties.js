window.addEventListener('load',()=>{
   
    const params=(new URL(document.location)).searchParams;
    const location1=params.get('location');
    document.getElementById('location').value=location1;
    console.log(location1);

const database=firebase.database();
const rootref=database.ref('Properties/');
var str=firebase.storage();

rootref.child(location1).on('value',snapshot =>{
    var temp = []
    snapshot.val().forEach((item)=>{
        temp.push(item);
    })
    properties.properties = temp
});
});