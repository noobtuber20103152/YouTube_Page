
let text = document.getElementById("email");
let text2 = document.getElementById("password1")
function jao(){
    location.replace("./login.html")
}
function redirect(){
    let x = text.value;
    let len1 = x.length;
    let y = text2.value;
    let len2 = y.length;
    if(len1==0 || x.substring(len1-10, len1)!="@gmail.com"){
        alert("Please enter a valid email id");
    }
   
    else if(len2==0){
        alert("Please enter your password");
    }
    else{
      location.replace("./tologin.html")
    }
    // if(len1==0 || text.substring(len1-9-1, len1));
}

let m=document.getElementById("info");

function visible(){
   if(m.style.visibility=="hidden"){
       m.style.visibility="visible";
       m.style.height="auto";
       m.style.transform="translateY(10px)"
       m.style.transition="all 1s"
   }
   else{
       m.style.visibility="hidden";
       m.style.height="0";
       m.style.transform="translateY(0px)"
       m.style.transition="all 1s"
   }
}