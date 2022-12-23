let left_butt=document.querySelector(".left_items")
let order_list=document.querySelector("#table_data")
let tabclear=document.getElementById("c");
tabclear.addEventListener("click",clear);
let orders=document.getElementById("od");
let current_button=document.getElementById("cu");
let select_items;
let total=0;
var tax;
let amount;
let dis;
var x;
var value=1;
let quantity=0;
let itemlist=[];
let count=0;
let quan=document.getElementById("q");
let discoun=document.getElementById("d");
let taxamount=document.getElementById("t");
let totalch= document.getElementById("ch");
let ordernum=document.getElementById("or");
let diplaybill=document.querySelector(".datailsbox");

var userdata;
 var disp=document.getElementById("tabulate");
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
   // itemlist.push(select_items[id-1]);
   itemlist.push({
    "name":select_items[id-1].name,
    "quantity":value,
    "price":select_items[id-1].price
   })
    
    console.log(itemlist);
    order_list.innerHTML+=`<tr>  
    <td>${select_items[id-1].name}</td>
    <td id="q"><input id="qua" type="text" value="${value}" onchange="change(${id})"  style="width:30px;"></td>
    <td id="pre">${select_items[id-1].price}</td>
    
    </tr>`
    calculations(id);
  console.log(itemlist);
}
orders.addEventListener("click",posting);
let orde=document.getElementById("or");
let names=document.getElementById("p");
async function posting(){
   
    userdata={
        "customername":`${names.value}`,
        "discountamount": `${dis}`,
        "billamount": `${total}`,
        "Taxamount":`${tax}`,
        "items":itemlist
        
    }
 
    let postin=await fetch("http://localhost:3000/orderItems",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userdata)
    })
    let datatotal=await postin.json();
    console.log(datatotal);
}
orde.addEventListener("click",table_2);

let tableprint=document.getElementById("tab_data");

let mainn=document.querySelector(".main");
async function table_2(){
    disp.style.display="block";
    mainn.style.display="none";
    console.log(itemlist);
    let t=await fetch("http://localhost:3000/orderItems");
    let ta=await t.json();
    console.log(ta);
    for(let i=0;i<ta.length;i++){
    tableprint.innerHTML+=
    `<tr>
   
    <td>${ta[i].customername}</td>
    <td>${ta[i].discountamount}</td>
    <td>${ta[i].Taxamount}</td>
    <td>${ta[i].billamount}</td>
    <td><button  onclick="printamount(${ta[i].id})" id="v" >view deatils</button></td>
    
    </tr>`
}
console.log(ta.length);
ordernum.innerHTML+=ta.length;

}

function clear(){
    console.log("hi");
    order_list.innerHTML="";
    discoun.innerHTML="XXXX";
    taxamount.innerHTML="-";
    totalch.innerHTML="---";

}

// <td>${Date()}</td>

 async function printamount(e){
    console.log(e);
    diplaybill.style.display="block";
    diplaybill.innerHTML="";
    let pa=await fetch(`http://localhost:3000/orderItems/${e}`);
    let pan=await pa.json();
    console.log(pan);
   
    diplaybill.innerHTML+=

    `<h1>----order summary---</h1>
    <h2> <i>CustomerName:</i>${pan.customername}</h2>
    
    <h2> <i>Discount:</i>${pan.discountamount}</h2>
    <h2> <i>Taxamount:</i>${pan.billamount}</h2>
    
    <h3><i>Date:</i>${Date()}</h3>
    <h2>ordered items:</h2>
    
    `
    for(let j=0;j<pan.items.length;j++){      
        diplaybill.innerHTML+=
        ` <pre>${pan.items[j].name}x${pan.items[j].quantity}=${pan.items[j].price}</pre>
        <table><thead>
    <tr><th>Items-</th>
    <th>quantity-</th>
    <th>price-</th></thead>
        <tr>
      <td>${pan.items[j].name}</td>
        <td>${pan.items[j].quantity}</td>
        <td> ${pan.items[j].price}</td>
        </tr>
        </table>
        `
       //console.log(pan.items[j].price);
    }
}
function change(id){
    console.log("hello")
    let quantityitem=document.getElementById("qua");
    x=parseInt(quantityitem.value);
    console.log(quantityitem);
console.log(id);
calculations(id);
}
let price=document.getElementById("pri");
function calculations(id){
 console.log(select_items)
var amount=parseInt(`${select_items[id-1].price}`);
//itemlist.push(select_items[id-1].price);
let itemprice=amount*x;
console.log(itemprice);
//price.innerHTML=itemprice;
 total=total+amount;
 console.log(total);

dis=Math.round(total*0.03);
discoun.innerHTML=dis;
total=total-dis;
console.log(dis);
console.log(total);
tax=Math.round(total*4/100);
console.log(tax);
taxamount.innerHTML=tax;
total=total+tax;
totalch.innerHTML="Total charge="+total;
console.log(total);
}
current_button.addEventListener("click",getting);
function current_status(){
    diplaybill.style.display="none";
    disp.style.display="none";
    mainn.style.display="block";
}