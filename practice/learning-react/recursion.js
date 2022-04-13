// Print 10 to 1
const countdown = (value, fn) => {
    fn(value)
    return value > 0 ? countdown(value - 1, fn) : null
}
countdown(10, console.log)