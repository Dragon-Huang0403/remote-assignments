/* Simple Function Block */

const oneSecond = () => 1000;
const clear = () => console.clear();
const getCurrentTime = () => new Date();
const log = message => console.log(message);


/* Function to handle data */

// Convert Date to a json
const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});
// Modify clockTime.hours to (hours - 12) if hours > 12
const civilianHours = clockTime => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});
// Append ampm into clockTime
const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? "PM" : "AM"
});


/* High Order Function */

// Execute target(time)
const display = target => time => target(time);
// Format clockTime depands on input format
const formatClock = format => clockTime => (
    format
        .replace('hh', clockTime.hours)
        .replace('mm', clockTime.minutes)
        .replace('ss', clockTime.seconds)
        .replace("tt", clockTime.ampm)
);
// Preprend Zero to clockTime
const preprendZero = key => clockTime => ({
    ...clockTime,
    [key]: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key]
});


/* Compose Function */
const compose = (...fns) => arg => (fns.reduce((composed, fn) => fn(composed), arg));

// Convert clockTime from 24-hour to 12-hour
const convertToCivlianTime = clockTime => (
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)
);
// Formate time to 2 digits
const doubleDigits = civilianTime => (
    compose(
        preprendZero("hours"),
        preprendZero("minutes"),
        preprendZero("seconds")
    )(civilianTime)
);


// Main Function
const startTicking = () => (
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivlianTime,
            doubleDigits,
            formatClock(" hh:mm:ss tt"),
            display(log)
        )
    ),
    oneSecond()
);

startTicking();