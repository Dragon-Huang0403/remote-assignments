// Assignment 1
function max(numbers) {

    // Store and the first item in numbers to max, and remove it from numbers
    let max = numbers.shift();

    // For loop to get each item and compare to max
    // If number > max, then reassign the number to max
    for (number of numbers) {
        if (number > max) {
            max = number;
        }
    }

    // Output result
    console.log(max)
    return max;
}

// For test
max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]);