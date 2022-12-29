let url=document.getElementById("IMG");
let title=document.getElementById("TITLE");
let stitle=document.getElementById("STITLE");
let description=document.getElementById("DES");
let submit_button=document.getElementById("SUB");
submit_button.addEventListener("click",input_field)
let select=document.getElementById("opt");
var userdata;
var input;
 async function input_field(){
    userdata={
       "title":`${title.value}`,"subtitle":`${stitle.value}`, "image_url":`${url.value}`,"description":`${description.value}`,"status":`${select.value} `
   }
  input=await fetch("http://localhost:3000/data",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userdata)
    })
    let input_data=await input.json();
    console.log(input_data);
    
  }

      