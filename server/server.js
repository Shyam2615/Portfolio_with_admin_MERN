require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authroute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");

const corsOptions = {
    // origin :"http://localhost:5173",
    origin :"*",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authroute); 
app.use("/api/form",contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use(errorMiddleware);

// app.get('/', (req, res)=>{
//     res.status(200).send("Welcome to the world of mern");
// });

// app.get('/register', (req, res)=>{
//     res.status(200).send("Registration page will be live soon!...");
// });

app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running on port: ${PORT}`);
    });
});