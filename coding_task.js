	var btn2=document.querySelector(".button2");
	var login= document.querySelector(".button1");
	var content=document.querySelector(".container");
	login.addEventListener("click", function2)
	function function2(){
	content.style.display="block";
	login.style.display="none";
	btn2.style.display="none";
	};
	var account_num=["123456","56789"];
	var password=["123","456"];
	function valid(){
	var account=document.querySelector("#account").value;
	var passwd=document.querySelector("#password").value;
	if (account_num[0]==account  && password[0]==passwd || account_num[1]==account  && password[1]==passwd)
	{
	alert("welcome")
	}
	 else if(account==" " && passwd== " "){
	alert("inputs not be empty")
	}
	
	
	else{
	alert("incorrect details")
	}
	}
	var sign_in=document.querySelector("#btn");
    var options=document.querySelector(".division");
	sign_in.addEventListener("click",function1)
	function function1(){
	options.style.display="block";
	sign_in.style.display="none";
	content.style.display="none";
	};
	