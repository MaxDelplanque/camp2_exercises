const request = require("request");
const express = require("express");
const app = express();
const PG = require("pg");
const client = new PG.Client();

client.connect();

//creation de notre API:
const port = process.env.PORT || 3000;

app.get("/", function (request, result) {
  result.send("Hello World!");
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

// "/brands" -> return all brands
app.get("/brands", function(request, result) {
  client.query(
    "SELECT * FROM brands",
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
        result.json(error);
      } else {
        console.log(resultQuery);
        result.json(resultQuery.rows);
      }
    }
  );
});

// "/products" -> return all products
app.get("/products", function(request, result) {
  client.query(
    "SELECT * FROM products",
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
        result.json(error);
      } else {
        console.log(resultQuery);
        result.json(resultQuery.rows);
      }
    }
  );
});

// "/categories" -> return all categories
app.get("/categories", function(request, result) {
  client.query(
    "SELECT * FROM categories",
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
        result.json(error);
      } else {
        console.log(resultQuery);
        result.json(resultQuery.rows);
      }
    }
  );
});

// "/categories/:id" -> return a specific category
app.get("/categories/:id", function(request, result) {
  client.query(
    "SELECT * FROM categories WHERE id = $1",
    [request.params.id],
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
        result.json(error);
      } else {
        console.log(resultQuery);
        result.json(resultQuery.rows);
      }
    }
  );
});

// "/brands/:id" -> return a specific brand
app.get("/brands/:id", function(request, result) {
  client.query(
    "SELECT * FROM brands WHERE id = $1",
    [request.params.id],
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
        result.json(error);
      } else {
        console.log(resultQuery);
        result.json(resultQuery.rows);
      }
    }
  );
});

// "/products/:id" -> return a specific product
app.get("/products/:id", function(request, result) {
  client.query(
    "SELECT * FROM products WHERE id = $1",
    [request.params.id],
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
        result.json(error);
      } else {
        console.log(resultQuery);
        result.json(resultQuery.rows);
      }
    }
  );
});

// "/categories/:id/products" -> return all products from a specific category
app.get("/categories/:id/products", function(request, result) {
  client.query(
    "SELECT * FROM category_products c INNER JOIN products p ON c.product_id = p.id WHERE c.category_id = $1 ",
    [request.params.id],
    function(error, resultQuery) {
      if (error) {
        console.warn(error);
        result.json(error);
      } else {
        console.log(resultQuery);
        result.json(resultQuery.rows);
      }
    }
  );
});


module.exports = app;
