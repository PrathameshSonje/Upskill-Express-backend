const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const path = require("path");
const app = express();
const dotenv= require('dotenv').config()

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.use(express.static("public"));
app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
const MONGODB_URL  = process.env.MONGODB_URL
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3001, () => console.log('Server running on port 3001'));
