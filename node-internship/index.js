import http from "http";
import { add } from "./scripts/module.js";

const port = 5000;

const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

// Response time middleware
const responseTimeTracker = (req, res, next) => {
    const startTime = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - startTime;
        console.log(`Response Time: ${duration}ms`);
    });

    next();
};

// Use middlewares
app.use(requestLogger);
app.use(responseTimeTracker);


// this is a function of add method
console.log(add(1, 2));
// this is http server
const server = http.createServer((req, res) => {
    res.end("Hello world");
})

// here we start a server on port 5000
server.listen(port, () => {
    console.log("Server is running http://localhost:5000")
});
