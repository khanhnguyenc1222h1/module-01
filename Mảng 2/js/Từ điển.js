function trans(){
    let english = ["banana", "apple", "orange", "pen", "pencil", "book"];
    let vietnam = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
    let string = document.getElementById("textDoc").value;
    let indexs = 0;
    let result = "";
    for(let i = 0 ; i < english.length ; i++){
        if(string == english[i]){
            indexs = i;
            for(let j = 0; j < vietnam.length ; j++){
                if(indexs == j){
                    result = vietnam[j];
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}