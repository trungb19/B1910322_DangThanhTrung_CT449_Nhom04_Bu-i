const app = require("./app");
const config = require("./app/config");

//Gọi chạy server
const PORT = config.app.port;
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}.`);
});