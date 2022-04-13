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
        ```
        const manu = new Vacation("Maui", 7);
        maui.print() // Maui | 7 days


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
    ```

# 