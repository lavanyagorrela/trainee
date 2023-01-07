let services=document.querySelector(".items_fetching");
const url_1= 'http://localhost:3000/';
const user_url_1=`${url_1}data`;
async function getting_data_1(){
    //services.innerHTML="";
    let fetch_data_1=await fetch(user_url_1);  
    let fetched_data_1=await fetch_data_1.json();
    console.log(fetched_data_1);
    for(let properties in fetched_data_1){
        services.innerHTML+=`
        <div class="col-md-3 column-data">
        <img src="${fetched_data_1[properties].image_url}">
            <h2>${fetched_data_1[properties].title}</h2>
            <h6>${fetched_data_1[properties].subtitle}</h6>
            <p>${fetched_data_1[properties].description}</p>
       </div>`
    }
}
getting_data_1();

export{
    getting_data_1   
}


