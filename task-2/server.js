import express from "express";


const app = express();


app.get("/", (req, res) => {
    res.send("api is running ")
});
console.log("api is running");

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        message: "health api is running"
    })
});

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "test api is running"
    })
});

app.listen(3000, () => {
    console.log("Server is running http://localhost:3000")
});



