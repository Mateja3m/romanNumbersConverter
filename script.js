const arabicInput = document.getElementById("arabicNum");
const romanInput = document.getElementById("romanNum");


arabicInput.addEventListener('mousemove', function changeColor (e) {
    document.body.style.background = "rgb("+e.offsetX+","+e.offsetY+",10)";
})




arabicInput.addEventListener("input", (e) => {
    romanNum.value = convertToRoman(e.target.value);
});

function convertToRoman(num) {
    let romanNumbers = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';
    for (let i in romanNumbers) {
        while (num >= romanNumbers[i]) {
            roman += i;
            num -= romanNumbers[i];
        }
    }
    return roman;
}