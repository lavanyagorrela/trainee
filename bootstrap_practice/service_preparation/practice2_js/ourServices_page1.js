let services=document.querySelector(".items_fetching");
const url= 'http://localhost:3000/';
const user_url=`${url}data`;
async function getting_data(){
    //services.innerHTML="";
    let fetch_data=await fetch(user_url);  
    let fetched_data=await fetch_data.json();
    console.log(fetched_data);
    for(let properties in fetched_data){
        services.innerHTML+=`
        <div class="col-md-3 column-data">
        <img src="${fetched_data[properties].image_url}" >
            <h2>${fetched_data[properties].title}</h2>
            <h6>${fetched_data[properties].subtitle}</h6>
            <p>${fetched_data[properties].description}</p>
       </div>`
    }
}
getting_data();