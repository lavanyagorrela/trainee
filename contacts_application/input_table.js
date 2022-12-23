
var table=document.querySelector(".tbd");

let names=document.querySelector("#n");
let contacts=document.querySelector("#c");
let email=document.querySelector("#m");
let dob=document.querySelector("#d");
let sub=document.querySelector("#s");
sub.addEventListener("click",fun);
var userdata;
async function fun(){
    userdata={

        "name":`${names.value}`,"contact":`${contacts.value}`,"email":`${email.value}`,"DOB":`${dob.value}`
    }
    var y=await fetch("http://localhost:3000/posts",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userdata)
    })
    let l=await y.json();
    console.log(l);
    cli();
  }

  async function cli(){
    table.innerHTML="";
    var c=await fetch("http://localhost:3000/posts")
    let li=await c.json();
    console.log(li);
    for(let i=1;i<li.length;i++){
        table.innerHTML+=
        `<tr>
        <td>${li[i].name}</td>
        <td>${li[i].contact}</td>
        <td>${li[i].email}</td>
        <td>${li[i].DOB}</td>
        <td><button onclick="edit(${li[i].id})" style="background-color:green" >edit</button></td>
        <td> <button onclick="del(${li[i].id})" style="background-color:red" >delete</button></td>
     
        </tr>`
    }
  }
  async function del(t){
    console.log(t);
    var z=await fetch(`http://localhost:3000/posts/${t}`,{
        method:"DELETE",
        headers:{"content-type":"application/json"},
    }

    );
    
    cli();
 
  }
  async function edit(e){
   var s=await fetch(`http://localhost:3000/posts/${e}`)
   var t=await s.json();
   console.log(t);
   names.value=`${t.name}`
   contacts.value=`${t.contact}`
   email.value=`${t.email}`
   dob.value=`${t.DOB}`


   sub.removeEventListener("click",fun);
    sub.addEventListener("click",function(){
      pat(e);
    });
  }

  async function pat(p){
    console.log("hi")
    userdata={

      "name":`${names.value}`,"contact":`${contacts.value}`,"email":`${email.value}`,"DOB":`${dob.value}`
  }
    var r=await fetch(`http://localhost:3000/posts/${p}`,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(userdata)
    })
    var re=await r.json();
    console.log(re);
    cli();
    table.innerHTML="";
  }
//   <button class="btn-save" onclick="pat(${li[i].id})">save</button></td>