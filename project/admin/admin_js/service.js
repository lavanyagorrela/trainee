let table_formation=document.querySelector("#table_data_service");


async function table_data(id){
    table_formation.innerHTML="";
    let table=await fetch("http://localhost:3000/data");
    let total_table=await table.json();
    console.log(total_table);
    for (let s=0;s<total_table.length;s++) {
        table_formation.innerHTML+=`<tr>
        <td>${total_table[s].id}</td>
        
        <td>${total_table[s].title}</td>
        <td>${total_table[s].subtitle}</td>
        <td>${total_table[s].description}</td>
        <td><button>edit</button><button>delete</button></td>`
    }

}
table_data();  
