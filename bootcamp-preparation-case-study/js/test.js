function myFunction(){
    let a = parseInt(document.getElementById("myFunction").value);
    let snt = true;
    if(a<2){
             snt = false;
    }else{
        for(let i = 2 ; i < a ; i++){
            if(a%i===0){
               snt = false;
            }
        }
    }
    if(snt == true){
        document.getElementById("result").innerHTML =  "là số nguyên tố";
    }else{
        document.getElementById("result").innerHTML = "không phải là số nguyên tố";
    }
}