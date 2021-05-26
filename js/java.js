var email = document.querySelector("#Email");
var name =  document.querySelector("#Name");
var message = document.querySelector("#Message");
var form = document.querySelector("#myform");


function checkName (){
    var min = 3;
    var username = Name.value.trim();
    if(username.length <= min){
       showError(Name , "Name Must be More Than 3 Character");
    }
    else{
        removeError(Name )
    }
}

function showError(input , message){
    var small = input.nextElementSibling;
    small.textContent=message;
    input.style.borderColor="red"
}
function removeError(input){
    var small = input.nextElementSibling;
    small.textContent="";
    input.style.borderColor = "gray";
}


function checkEmail(){
    // Regular Expression
    var re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   
   
    var emailValid = Email.value.trim()
    if(emailValid === "Email"){
        showError(Email , "Email Must be Not Empty")
    }
    else if(!re.test(emailValid)) {
        showError(Email , "Enter Valid Email")
    }
    else{
        removeError(Email)
    }
}




function checkMessage (){
    var min = 10;
    var userMessage = Message.value.trim();
    if(userMessage.length <= min){
       showError(Message , "Name Must be More Than 3 Character");
    }
    else{
        removeError(Message )
    }
}










form.addEventListener('input', function(e) {
    console.log(e.target.id);
    
    
   switch (e.target.id) {
        case 'Name':
           
           checkName();
            break;
        case 'Email':
            checkEmail();
            
            break;
        case 'Message' :
             checkMessage();
            
            break;    
    }

            
});










