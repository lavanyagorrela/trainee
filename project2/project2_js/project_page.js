let projects=document.querySelector(".project-pageimages");
const url_projects= 'http://localhost:3000/';
const user_url_projects=`${url_projects}project-images`;
async function getting_data_projects(){
    //services.innerHTML="";
    let fetch_data_projects=await fetch(user_url_projects);  
    let fetched_data_projects=await fetch_data_projects.json();
    console.log(fetched_data_projects);
    for(let project_images in fetched_data_projects){
        projects.innerHTML+=`<div class="col-4">
        <img src="${fetched_data_projects[project_images].project_image_url}"  id="images">
       </div>`
        
    }
}
getting_data_projects();

export{
    getting_data_projects  
}


