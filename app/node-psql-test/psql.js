const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "127.0.0.1",
  database: "practice",
  password: "qwe123",
  port: 5432,
});
client.connect();
/* client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
}); */

const query = {
    text: "INSERT INTO users (user_id, user_psw, user_name) VALUES ($1, $2, $3)",
    values: ['kira', '1234', '김유민'],
};
client.query(query)
    .then((res) => {
        console.log(res);
        client.end();
    })
    .catch((e) => console.error(e.stack));