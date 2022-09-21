const express = require("express");

//cors dùng để chia sẻ tài nguyên chéo, vd clien gọi API từ 1 nguồn khác có domain khác với trang hiện tại
const cors = require("cors");

const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book application!"});
});

app.use("/api/contacts", contactsRouter);
module.exports = app;