const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer: a + b
    })
})

app.listen(3000);