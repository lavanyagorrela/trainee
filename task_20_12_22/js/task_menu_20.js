let left_butt = document.querySelector(".left_items")
let order_list = document.querySelector("#table_data")
let tableclear = document.getElementById("c");
tableclear.addEventListener("click", clear);
let orders = document.getElementById("od");
let current_button = document.getElementById("cu");
let quan = document.getElementById("q");
let discoun = document.getElementById("d");
let taxamount = document.getElementById("t");
let totalch = document.getElementById("ch");
let ordernum = document.getElementById("or");
let diplaybill = document.querySelector(".datailsbox");
var displayy = document.getElementById("tabulate");
orders.addEventListener("click", posting);
let ordered_button= document.getElementById("or");
let names = document.getElementById("p");
ordered_button.addEventListener("click", table_2);
let tableprint = document.getElementById("tab_data");
let mainn = document.querySelector(".main");
let select_items;
var total;
var tax;
let amount;
let discountt;
var x;
var value = 1;
let quantity = 0;
let itemlist = [];
let count = 0;
var quantityitem;
var userdata;

async function getting() {
    let menu_items = await fetch("http://localhost:3000/orders");
    let menu = await menu_items.json();
    console.log(menu);
    left_butt.innerHTML = "";
    for (let i = 1; i < menu.length; i++) {
        left_butt.innerHTML +=
            `<button class="buttons" onclick="table_data(${menu[i].id})">
                                    ${menu[i].name}<br>${menu[i].price}</button>`
    }
}
getting();


//order_list.addEventListener("click",table_data);
async function table_data(id) {

    let select = await fetch('http://localhost:3000/orders/');
    select_items = await select.json();
    console.log(select_items);
    // itemlist.push(select_items[id-1]);
    itemlist.push({
        "name": select_items[id - 1].name,
        "quantity": 1,
        "price": parseInt(select_items[id - 1].price)
    })
    displayTable();
}

function displayTable(){
    total=0;
   // console.log(select_items[id - 1].price * itemlist[0].quantity)
    order_list.innerHTML = "";
    console.log(itemlist);
    for (let s in itemlist) {
        order_list.innerHTML += `<tr>  
                            <td>${itemlist[s].name}</td>
                            <td id="q"><input class="qua" type="text" value="${itemlist[s].quantity}" onchange="change(${s})"
                                style="width:30px;"></td>
                            <td class="one">${parseInt(itemlist[s].price * itemlist[s].quantity)}</td> 
                           </tr>`
                           total += parseInt(itemlist[s].price * itemlist[s].quantity);
    }

    console.log(total);

    calculations();
}

function change(id) {
    alert("hai")
    console.log(id);
    console.log(itemlist);
    quantityitem = document.querySelectorAll(".qua");
    console.log(itemlist[id].name);
    itemlist[id].quantity = parseInt(quantityitem[id].value);

    console.log(quantityitem[id].value);
    document.querySelectorAll(".one")[id].innerHTML = `${parseInt(itemlist[id].price * itemlist[id].quantity)}`;
    //calculations();
    displayTable();
}

function calculations() {
    console.log("HELLO");
    
    console.log(itemlist);
   
    console.log(total);
    discountt = total * 0.03;
    discoun.innerHTML = discountt;
    total = total - discountt;
    console.log(discountt);
    console.log(total);
    tax = total * 0.04;
    console.log(tax);
    taxamount.innerHTML = tax;
    total = total + tax;
    totalch.innerHTML = "Total charge=" + total;
    console.log(total);
}

async function posting() {
    userdata = {
        "customername": names.value,
        "discountamount": discountt,
        "billamount": total,
        "Taxamount": tax,
        "items": itemlist
    }

    let postin = await fetch("http://localhost:3000/orderItems", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userdata)
    })
    let datatotal = await postin.json();
    console.log(datatotal);
}
async function table_2() {
    displayy.style.display = "block";
    mainn.style.display = "none";
    current_button.style.backgroundColor="whitesmoke";
    ordered_button.style.backgroundColor="white";
    console.log(itemlist);
    let t = await fetch("http://localhost:3000/orderItems");
    let ta = await t.json();
    console.log(ta);
    for (let i = 0; i < ta.length; i++) {
        tableprint.innerHTML += `<tr>
                                        <td>${ta[i].customername}</td>
                                        <td>${ta[i].discountamount}</td>
                                        <td>${ta[i].Taxamount}</td>
                                        <td>${ta[i].billamount}</td>
                                        <td><button  onclick="printamount(${ta[i].id})" id="v" >view deatils</button></td>
                                    </tr>`
    }
    console.log(ta.length);
    ordernum.innerHTML += ta.length;
    calculations();
}

function clear() {
    console.log("hi");
    order_list.innerHTML = "";
    discoun.innerHTML = "XXXX";
    taxamount.innerHTML = "-";
    totalch.innerHTML = "---";

}



async function printamount(e) {
    console.log(e);
    diplaybill.style.display = "block";
    diplaybill.innerHTML = "";
    let pa = await fetch(`http://localhost:3000/orderItems/${e}`);
    let pan = await pa.json();
    console.log(pan);

    diplaybill.innerHTML +=

        `<h1>----order summary---</h1>
    <h2> <u><i>CustomerName:</i></u>${pan.customername}</h2>
    
    <h2> <u><i>Discount:</i></u>${pan.discountamount}</h2>
    <h2> <u><i>Taxamount:</i></u>${pan.Taxamount}</h2>
    <h2> <u><i>Totalamount:</i></u>${pan.billamount}</h2>
    <h3><u><i>Date:</i></u>${Date()}</h3>
    <h2><u>ordered items:</u></h2>
    
    `
    for (let j = 0; j < pan.items.length; j++) {
        diplaybill.innerHTML +=
            ` <pre><u>${j + 1}</u>-${pan.items[j].name}x${pan.items[j].quantity}=${parseInt(pan.items[j].price*pan.items[j].quantity)}</pre>
           `
    //     <table><thead>
    // <tr><th><u>Item</u></th>
    // <th><u>quantity</u></th>
    // <th><u>price</u></th></thead>
    //     <tr>
    //   <td>${pan.items[j].name}</td>
    //     <td>${pan.items[j].quantity}</td>
    //     <td> ${pan.items[j].price}</td>
    //     </tr>	
    //     </table>
    //     `
        //console.log(pan.items[j].price);
    }
}


let price = document.getElementById("pri");
let right=document.querySelector(".right_items")
current_button.addEventListener("click", current_status);
function current_status() {
    diplaybill.style.display = "none";
    displayy.style.display = "none"; 
    mainn.style.display = "block";
    right.style.display = "block";
    current_button.style.backgroundColor="white";
    ordered_button.style.backgroundColor="whitesmoke";
    order_list.innerHTML = "";
    discoun.innerHTML = "XXXX";
    taxamount.innerHTML = "-";
    totalch.innerHTML = "---";
    // location.reload();
    getting();
}