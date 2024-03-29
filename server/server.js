const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/", require("./routes/productRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/orders", require("./routes/orderRoutes"));

port = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED")
    app.listen(port, () => {
      console.log(`server is running on port : ${port}`);
    });
  })
  .catch((err) => console.log(err));

