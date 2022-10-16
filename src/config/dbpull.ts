var mysql = require('mysql');


export var pool = mysql.createPool({
  connectionLimit:4,
  host: "https://nawill.tech",
  user: "nawinqej",
  password: "@Q?S=cPn0u.K",
  database:"nawinqej_mydb_n"
});

pool.getConnection((err: any,connection: any)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
  connection.release();
});


