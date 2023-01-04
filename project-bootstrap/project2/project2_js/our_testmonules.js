let testmonials=document.querySelector("#content");
let fetched_data;
let fetch_data;
const url= 'http://localhost:3000/';
const user_url=`${url}information`;
//export{url,user_url}
async function getting_data(){
    testmonials.innerHTML="";
   
     fetch_data=await fetch(user_url);  
     try{
        if(fetch_data.status!==200)throw(e);
    fetched_data=await fetch_data.json();
    console.log(fetched_data);
    all_data();
}catch(error){
console.log(error.name);
}
}
function all_data(){
    for(let properties in fetched_data){
        testmonials.innerHTML+=`
        <div class="col-3 p-2 text-start division" >
                        <img src="${fetched_data[properties].star_image}" alt="logo">
                    <p class="m-2 mb-4">${fetched_data[properties].description}</p>
                     <div class="row">
                         <div class="col-md-3">
                             <img src="${fetched_data[properties].image_url}" alt="logo">
                         </div>
                         <div class="col-md-6">
                             <h6 class="text-center text_color">${fetched_data[properties].name}</h6> 
                             <p class="text-center text" >${fetched_data[properties].post}</p> 
                         </div>
                         <div class="col-md-3">
                             <img src="${fetched_data[properties].double_quotes}" alt="logo" class="logo">
                         </div>
                     </div>
                    </div>`
    
    }
}
getting_data();