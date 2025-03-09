let userName =prompt("Enter user name:");
let password=prompt("Enter password:");
let confirmPassword=prompt("Enter confirm password:");
if(userName=="naphut star"){
    if(password =="1234"){
        if(confirmPassword==2222){
            document.write("success fully");
        }else {
            document.write("not is confirmPassword)");
        }

    }else{
        document.write("password is valid");
    }
}else{
    document.write("invalid login username");
}