const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const path = require("path");
const app = express();

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
mongoose.connect('mongodb+srv://prathameshsonje147:AG7vbEJc63L8cvg9@cluster0.58ck59i.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3001, () => console.log('Server running on port 3001'));
