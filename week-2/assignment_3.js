function avg(data) {
    // Initialize result value
    let result = 0;
    // Get data size
    let size = data.size;
    // Sum each product's price
    for (let product of data.products) {
        result += product.price;
    }
    // Average the price
    result /= size;
    // round result to second decimal
    result = Math.round(result * 100) /100;

    console.log(result);
    return result;
}


// Test
avg({
    size: 3,
    products: [
        {
            name: "Product 1",
            price: 101
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});