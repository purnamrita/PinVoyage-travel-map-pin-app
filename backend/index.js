const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
const cors = require("cors");
const PORT = process.env.PORT || 3030;

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
.then(() => console.log("MongoDB Connected"))
.catch((err) => {
    console.log(err);
});

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
    console.log("Backend server is running");
})