let numbers = Number(prompt("Nhập n số nguyên tố đầu tiên: "));//số lượng SNT cần tìm
let foundPrimeNumbers = 0; //số lượng SNT đã tìm thấy
let commonDivisorNum = 0; //số lượng ước số của 1 số cần kiểm tra phải SNT hay không
const MAX_INT_NUM = Number.MAX_SAFE_INTEGER; //9007199254740991

for (let i = 2; i < MAX_INT_NUM; i++) {
    if (foundPrimeNumbers < numbers) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0)
                commonDivisorNum++;
        }
        if (commonDivisorNum === 2) {
            document.write(i + "<br>");
            foundPrimeNumbers++;
        }
        commonDivisorNum = 0;
    } else {
        break;
    }
}