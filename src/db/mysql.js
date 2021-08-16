const mysql = require("mysql");

// 创建连接对象
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chenshuheng",
  port: "3306",
  database: "myblog",
});

// 开始连接
con.connect();

// 执行sql语句的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });

  return promise;
}

module.exports.exec = exec;
