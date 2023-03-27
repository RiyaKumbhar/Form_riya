const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "students"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM s_table";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});



app.get("/", (req, res) => {
    // const sqlInsert = "INSERT INTO s_table (id, name, roll_no, course) VALUES (105, 'Diya Mehta', 05, 'IT')";
    // db.query(sqlInsert, (error, result) => {
    //     console.log("error", error);
    //     console.log("result", result);
    //     res.send("Hello Express");
    // });

});

app.listen(5001, () => {
    console.log("Server is running on port 5001");
})