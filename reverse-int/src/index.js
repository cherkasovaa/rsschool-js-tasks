module.exports = function reverse(n) {
    // first solution
    // return +Math.abs(n).toString().split("").reverse().join("");

    // second solution
    n = Math.abs(n);
    let result = "";

    while (n > 0) {
        let balance = n % 10;
        result += balance;
        n = Math.floor(n / 10);
    }

    return parseInt(result);
};
