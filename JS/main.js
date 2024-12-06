function getValue(){
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    var email=document.getElementById("email").value;
    var confirm=document.getElementById("confirm").value;
    var result=document.getElementById("result");
    if(user==""&&pass==""&&email==""&&confirm==""){
        result.setAttribute("class","styling");
        result.innerHTML="Please Fill All Form";
        return false;
    }else if(user.length<5 || user.length>15){
        result.setAttribute("class","styling");
        result.innerHTML="Please Enter A User Name Between 5-15 Charcter";
        return false;
    }else if(email.indexOf("@",3)==-1 || email.indexOf(".com")==-1){
        result.setAttribute("class","styling");
        result.innerHTML="Please Enter A Valid Email Address";
        return false;
    }else if(pass.length<8){
        result.setAttribute("class","styling");
        result.innerHTML="Enter At Least 8 Charcter In Password";
        return false;
    }else if(pass!=confirm){
        result.setAttribute("class","styling");
        result.innerHTML="Please Check Your Confirm Password";
        return false;
    }
}