const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = parseInt(req.query.Id);

    if (username === "nishant" && password === "pass") {
        if (kidneyId === 1 || kidneyId === 2) { // Use strict equality and consider checking against strings
            console.log(username, "  ", password);
            res.json({
                msg: "You are awesome",
            });
        } else {
            res.status(400).json({
                msg: "Invalid kidneyId",
            });
        }
    } else {
        res.status(400).json({
            msg: "Authentication failed",
        });
    }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
