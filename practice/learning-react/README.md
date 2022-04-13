# Function Expression 與 Function的差別
Function Expression不會Hoist


# Function 與 Class
Class為 Function + prototype:

```js
function Vacation(destination, length) {
    this.destination = desitnation;
    this.length = length;
}

Vacation.prototype.print = function() {
    console.log(`${this.destination} | ${this.length} days `);
}

const manu = new Vacation("Maui", 7);
maui.print() // Maui | 7 days
```
--------------與上方相等---------------------
```js
class Vacation{
    constructor(destination, length) {
        this.destination = destination;
        this.length = lenght;
    }

    print() {
        console.log(`${this.destination} | ${this.length} days `);
    }
}

const manu = new Vacation("Maui", 7);
maui.print() // Maui | 7 days
```


# Class extends
super在class裡面，可以呼叫繼承的function & constructor，但必須在呼叫this之前使用

```js
class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, legnth);
        this.gear = gear;
    }

    print() {
        super.print();
        console.log(this.gear);
    }
}

const trip = new Expedition ("Taipei", 3, "Gear")
trip.print() 
// Taipei | 3 days
// Gear
```


# 大部分的迴圈都可以用Recursion來取代
```js
const countdown = (value, fn) => {
    fn(value)
    return value > 0 ? countdown(value - 1, fn) : null
}
countdown(10, console.log)
// Print 10 to 1
```


# Function Compose
做一個compose函數，用於函數組合(連續呼叫)
```js
function multiSelf(x) {
    return x * x;
}

function multiSelfTwice(x) {
    return x * x * x * x;
}

// It's not good to read.
const result = num => multiSelfTwice(multiSelf(num));

// Create a function compose to this problem.
const compose = (..fns) => arg => fns.reduce((composed, fn) => fn(composed) ,arg)

// Good to read.
const result2 = compose(multiSelf, multiSelfTwice);
```