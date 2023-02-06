function bai2(){
    let temperature = Number(prompt("nhập một nhiệt độ bất kỳ"));
    while(temperature > 100 || temperature < 20){
        if(temperature > 100){
            temperature = prompt("cần giảm nhiệt độ");
        }else if( temperature < 20){
            temperature = prompt("cần tăng nhiệt");

        }
    }

}