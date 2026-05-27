// Express 서버
const express = require("express");
const app = express();
const mysql = require("mysql2");
const conn = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: "",
});

conn.connect();

app.listen(3000, () => {
    console.log("3000번 포트 서버 대기 중");
});

app.get("/", (req, res) => {
    res.send("나의 서버입니다.");
});

app.get("/user", (req, res) => {
    // send는 text/html 포맷
    // 요청도 json, 응답도 json tb_user
    conn.query("select * from tb_user", (err, rows, fields) => {
        if (err) {
            throw err;
        }
        res.json({ rows });
    });
});

app.get("/user/:id", (req, res, next) => {
    if (req.params.id === "0") {
        next();
    }

    // Prepared Statement 사용하여 보안 강화
    conn.execute(
        "select * from tb_user where id = ?",
        [req.params.id],
        (err, rows, fields) => {
            if (err) {
                throw err;
            }
            res.json({ rows });
        },
    );
});
