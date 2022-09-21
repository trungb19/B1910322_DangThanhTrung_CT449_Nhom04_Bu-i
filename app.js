const express = require("express");

//cors dùng để chia sẻ tài nguyên chéo, vd clien gọi API từ 1 nguồn khác có domain khác với trang hiện tại
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book application!"});
});

module.exports = app;