// Location Search Bar

// getting all requried elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector(".input");
const suggBox = document.querySelector(".autocom-box");

let suggestions = [
    "Mumbai, Maharashtra",
    "Gurgaon, Delhi",
    "Baga Beach, Goa"
];

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase();

        });
        console.log(emptyArray);
    } 
}

