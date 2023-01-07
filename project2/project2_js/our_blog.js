let our_blog=document.querySelector(".blog-box");
const url_blog= 'http://localhost:3000/';
const user_url_blog=`${url_blog}blog_page`;
async function getting_data_blog(){
    //services.innerHTML="";
    let fetch_data_blog=await fetch(user_url_blog);  
    let fetched_data_blog=await fetch_data_blog.json();
    console.log(fetched_data_blog);
    for(let properties_blog in fetched_data_blog){
        our_blog.innerHTML+=`
        <div class="col-4">
           <div class="card" style="width: 21rem;">
             <img src="${fetched_data_blog[properties_blog].image_url}" class="card-img-top" alt="...">
              <div class="card-body">
               <h5 class="card-title">${fetched_data_blog[properties_blog].title}</h5>
              <div class="d-flex flex-row">
                <div class="p-2"><img src="${fetched_data_blog[properties_blog].timer_image}" alt=""></div>
                <div class="p-2"><h6 class="small-text">${fetched_data_blog[properties_blog].date}</h6></div>
                <div class="p-2"><img src="${fetched_data_blog[properties_blog].person_image}" alt=""></div>
                <div class="p-2"><h6 class="small-text">${fetched_data_blog[properties_blog].name}</h6></div>
                <div class="p-2"><img src="${fetched_data_blog[properties_blog].message_image}" alt=""></div>
                <div class="p-2"><h6 class="small-text">${fetched_data_blog[properties_blog].comments}</h6></div>
              </div>
              <h6  class="card-text">${fetched_data_blog[properties_blog].description}</h6>
              <a href="#" class="btn buttton-color">Read More</a>
             </div>
           </div>
         </div>`
    }
}
getting_data_blog();

export{
    getting_data_blog 
}
//${fetched_data_1[properties].image_url}

