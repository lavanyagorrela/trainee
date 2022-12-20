let left_butt=document.querySelector(".left_items")
let order_list=document.querySelector("#table_data")
let tabclear=document.getElementById("c");
tabclear.addEventListener("click",clear);
let select_items;
let total=0;
var tax=0;
let amount;

async function  getting(){
    let menu_items=await fetch("http://localhost:3000/orders");
    let menu=await menu_items.json();
    console.log(menu);
    left_butt.innerHTML="";
    for(let i=1;i<menu.length;i++){
        left_butt.innerHTML+=
        `<button class="buttons" onclick="table_data(${menu[i].id})">${menu[i].name}<br>${menu[i].price}</button>`
       
    }
}
getting();
//order_list.addEventListener("click",table_data);
async function table_data(id){
     
    let select=await fetch('http://localhost:3000/orders/');
    select_items=await select.json();
    console.log(select_items);
    order_list.innerHTML+=`<tr>  
    <td>${select_items[id-1].name}</td>
    <td><input type="text" value="1" style="width:30px;">
    <td>${select_items[id-1].price}</td>
    
    </tr>`
    var amount=parseInt(`${select_items[id-1].price}`);
     //total.push(select_items[id-1].price);
     console.log(typeof(amount));
      total=total+amount;
      console.log(total);
    document.getElementById("ch").innerHTML="Total charge="+total;

   
}
function counttax(){
for(let i=0;i<total.length;i++){

}
}
function clear(){
    console.log("hi");
    order_list.innerHTML="";
}

// <tr>
// <td>Discount</td>
// <td><input type="text" value="1" style="width:30px;">
// <td><td>
// </tr>