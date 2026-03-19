require("dotenv").config();

const express = require("express");
const userRoutes = require("./src/routes/User.routes.js");

const errorHandler = require("./src/middleware/ErrorHandler.js");
const { timeStamp } = require("console");



const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);



// Health Route
app.get("/health",(req,res)=>{
    res.status(200).json({
        status:"ok",
        uptime:process.uptime(),
        timeStamp:new Date().toISOString(),
        environment:process.env.NODE_ENV || "development"


    })
})



// 404 handler;
app.use((req, res) => {
    res.status(404).json({ error: "ROute is not found" })
})

// GLobal Error Handler
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT} `);

})