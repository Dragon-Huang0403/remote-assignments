function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}


// Method 1: new operator with function
function mth1 (op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
}

// Test Method 1
let args1 = new mth1("-", 5, 10);
let ans1 = calculate(args1);
console.log(ans1);


// Method 2: Class with constructor
class mth2 {
    constructor (op, n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}

// Test Method 2
let args2 = new mth2("-", 15, 5)
let ans2 = calculate(args2);
console.log(ans2);