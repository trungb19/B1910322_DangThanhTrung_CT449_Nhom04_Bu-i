const express = require("express");

//cors dùng để chia sẻ tài nguyên chéo, vd clien gọi API từ 1 nguồn khác có domain khác với trang hiện tại
const cors = require("cors");
const app = express();

const contactsRouter = require("./app/routes/contact.route");

const ApiError = require("./app/api-error");

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book application!"});
});

//handle 404
app.use((req, res, next) => {
    //console.log("Resource not found");
    return next(new ApiError(404, "Resource not found"));
    //console.error(err.stack)
    /*
    res.status(404).send({
        status: 404,
        error: "Resource not found!"
    })*/
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});
module.exports = app;

