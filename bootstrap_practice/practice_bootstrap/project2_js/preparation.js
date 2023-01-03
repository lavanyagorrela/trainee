let services=document.querySelector(".items_fetching");
let fetched_data;
let fetch_data;
const url= 'http://localhost:3000/';
const user_url=`${url}data`;
async function getting_data(){
    services.innerHTML="";
     fetch_data=await fetch(user_url);  
    fetched_data=await fetch_data.json();
    console.log(fetched_data);
    all_data();
}

function all_data(){
    for(let properties in fetched_data){
        services.innerHTML+=`
        <div class="col-md-3 column-data">
       
            <h3>name:${fetched_data[properties].name}</h3>
            <h6>number:${fetched_data[properties].phno}</h6>
            <p>email:${fetched_data[properties].email}</p>
            <button type="button" class="btn btn-success">Add</button>
            <button type="button" class="btn btn-primary">edit</button>
            <button type="button" class="btn btn-warning">delete</button>
       </div>`
    }
}
getting_data();