module.exports = function toReadable(num) {
    const onesArray = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const teensArray = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tensArray = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let result = "";

    const getOnes = () => onesArray[num];
    const getTeens = () => teensArray[num - 10];
    const getTens = () => tensArray[Math.floor(num / 10)];
    const getHundreds = () => onesArray[Math.floor(num / 100)];

    if (num < 10) {
        return getOnes();
    }

    if (num >= 100) {
        result += getHundreds() + " hundred ";
        num %= 100;
    }

    if (num > 20) {
        result += getTens() + " ";
        num %= 10;
    }

    if (num >= 10 && num < 20) {
        result += getTeens();
    } else {
        if (num / 10 > 0) {
            result += getTens();
        }

        if (num < 10 && num !== 0) {
            result += getOnes();
        }
    }

    return result.trim();
};
