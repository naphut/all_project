





let userName =prompt ("Enter user name:");
let password=prompt("Enter password:");
let confirmPassword=prompt("Enter password confirm:");
if(userName=="star"){
    if(password==1234){

        if(confirmPassword==2222){
            document.write("confirmPassword is successfully");
        }else {
            document.write("confirmPassword is not");
        }

    }else{

        document.write("password is invalid");

    }
       
    

}else{
    document.write("invalid login username:");
}
