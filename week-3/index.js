const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

// Assignment 1
app.get("/", (req, res) => {
    res.send("Hello, My Server!");
});


// Assignment 2
app.get("/getData", (req, res) => {
    // Get query string
    const query = req.query;

    // Ensure query is not empty
    if (Object.keys(query).length === 0) {
        return res.send("Lack of Parameter");
    }
    
    // Ensure query.number is positive integer
    const num = Number(query.number);
    if (!Number.isInteger(num) || num <= 0) {
        return res.send("Wrong Parameter");
    }

    // Return the result
    let result = sumSeries(num);
    return res.send(result);
    

    // Return string of result of 1 + 2 ... + num
    function sumSeries(num) {
        let result = 0;
        for (let i = 1; i <= num; i++) {
            result += i;
        }
        return result.toString();
    }
});


// Assignment 3
app.use(express.static("public"));
app.set('view engine', 'pug');


// Assignment 4
app.use(cookieParser());

app.get("/myName", (req, res) => {
    const cookies = req.cookies;
    if (cookies.name) {
        let content = `${cookies.name}`
        return res.render("index", {name: cookies.name});
    }
    return res.sendFile(__dirname + "/views/myName.html");
})

app.get("/trackName", (req, res) => {
    const query = req.query;
    if (query.name != "") {
        res.cookie("name", query.name)
    }
    return res.redirect("/myName");
})

app.listen(port);