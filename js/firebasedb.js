const loc=document.getElementById('location');
const category=document.getElementById('category');
const type1=document.getElementById('type1');
const type2=document.getElementById('type2');
const search=document.getElementById('search');

const database=firebase.database();
const rootref=database.ref('Properties/');
var str=firebase.storage();

search.addEventListener('click',(e)=>{
    e.preventDefault();
    rootref.child(loc.value).on('value',snapshot =>{
        console.log(snapshot.val());
    });
});