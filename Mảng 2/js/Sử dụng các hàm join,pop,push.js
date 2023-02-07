function bai1(){
    let myColor = ["Red", "Green", "White", "Black"];
    document.write(myColor.toString());
}
function bai2(){
    let number = window.prompt("Enter a numbers: ");
    let str = number.toString();
    let array = [];
    for(let i = 0 ; i < str.length ; i++){
        if(str[i]%2 == 0 && str[i-1]%2 == 0){
            array.push("-"+ str[i]);
        }else{
            array.push(str[i])
        }
    }
document.write(array.join(''));
}
function bai3(){
    let str = prompt("Enter a string: ");
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
        for( let i = 0 ; i < str.length ; i++){
            if(UPPER.indexOf(str[i]) !== -1){
                result.push(str[i].toLowerCase());
            }else if(LOWER.indexOf(str[i]) !== -1){
                result.push(str[i].toUpperCase());
            }else{
                result.push(str[i]);
            }
        }
        document.write(result.join(''));
    }