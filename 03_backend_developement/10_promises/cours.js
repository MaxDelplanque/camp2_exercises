const PG = require("pg")

const client = new PG.Client();

client.connect();

const query =
  client.query("SELECT * FROM movies WHERE title = $1::text",["Godzilla"])
    .then((result) => { result.rows;})
    .then((rows) => {
      console.log(rows);
      client.end;
    })
    .catch((error) => {
      console.warn(error);
      client.end;
    });
