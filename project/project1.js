let servings=document.querySelector(".subcontainer");

async function getting(){
    // servings.innerHTML=" ";
let getting_data=await fetch("http://localhost:3000/data");
let getting_data1=await getting_data.json();
console.log(getting_data1);
console.log(`${getting_data1[0].description}`)
 for(let i=0;i<getting_data1.length;i++){
    servings.innerHTML+=`
    <div class="subcontainer1">
            <img src="${getting_data1[i].image_url}" id="image">
            <h1 id="number">${getting_data1[i].number}</h1>
            <h2 id="title">${getting_data1[i].title}</h2>
            <h4 id="subtitle">${getting_data1[i].subtitle}</h4>
            <p id="desc">${getting_data1[i].description}</p>
    </div>`
    
 }
 
}
getting();
 