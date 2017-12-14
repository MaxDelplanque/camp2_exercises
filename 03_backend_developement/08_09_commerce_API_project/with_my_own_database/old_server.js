const request = require("request");
const express = require("express");
const app = express();
const PG = require("pg");
const client = new PG.Client();

client.connect();
//mauvaise pratique de sortir le client.connect() mais obligatoire ici vu
//qu'il y a trop de connexions à faire. Si on le met à l'intérieur de la fonction, ça crash

function insertDataIntoTableCategories() {
  return request(
    {
      url: "https://decath-product-api.herokuapp.com/categories",
      method: "GET"
    },
    //on récup les données de l'API qu'on transforme en JSON:
    function(error, response, result) {
      const json = JSON.parse(result);
      json.map(category => {
      //on se connecte à notre BDD et on va la compléter:
        client.query(
          "INSERT INTO categories VALUES ($1, $2, $3)",
          [category.id,category.decathlon_id,category.label],
          function(error, resultQuery) {
            if (error) {
              console.warn(error);
            } else {
              console.log(resultQuery);
            }
          }
        );
      });
    }
  );
}

// insertDataIntoTableCategories();


function insertDataIntoTableBrands() {
  return request(
    {
      url: "https://decath-product-api.herokuapp.com/brands",
      method: "GET"
    },
    //on récup les données de l'API qu'on transforme en JSON:
    function(error, response, result) {
      const json = JSON.parse(result);
      json.map(brand => {
      //on se connecte à notre BDD et on va la compléter:
        client.query(
          "INSERT INTO brands VALUES ($1, $2)",
          [brand.id, brand.title],
          function(error, resultQuery) {
            if (error) {
              console.warn(error);
            } else {
              console.log(resultQuery);
            }
          }
        );
      });
    }
  );
}

// insertDataIntoTableBrands();

function insertDataIntoTableProducts() {
  return request(
    {
      url: "https://decath-product-api.herokuapp.com/products",
      method: "GET"
    },
    //on récup les données de l'API qu'on transforme en JSON:
    function(error, response, result) {
      const json = JSON.parse(result);
      json.map(product => {
      //on se connecte à notre BDD et on va la compléter:
        client.query(
          "INSERT INTO products VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
          [product.id, product.decathlon_id, product.title, product.description, product.brand_id, product.min_price, product.max_price, product.crossed_price, product.percent_reduction, product.image_path, product.rating],
          function(error, resultQuery) {
            if (error) {
              console.warn(error);
            } else {
              console.log(resultQuery);
            }
          }
        );
      });
    }
  );
}

// insertDataIntoTableProducts();

//creation de notre API:
const port = process.env.PORT || 3000;

app.get("/", function (request, result) {
  result.send("Hello World!");
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.get("/brands", function(request, result) {
  client.query(
    "SELECT * FROM brands",
    function(error, resultQuery) {
      if (error) {
        //console.warn(error);
        result.json(error);
      } else {
        console.log(resultQuery);
        result.json(resultQuery.rows);
      }
    }
  );
});

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

app.get("/categories/:id/products", function(request, result) {
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

function obtainAllIdsFromCategories(callback) {
  //on récup la liste des ids de categories
  client.query(
    "SELECT id FROM categories",
    function(error, resultQuery) {
      if (error) {
        console.log(error);
      } else {
        callback(resultQuery.rows); //on fait un callback
      }
    }
  );
}

obtainAllIdsFromCategories(obtainAllProductsFromCategories);
//Problème car on tappe trop dans l'API

function obtainAllProductsFromCategories(categoriesArray) {
  // connexion à l'API Decath-Product
  categoriesArray.map(function(id) {
    return request(
      {
        url: `https://decath-product-api.herokuapp.com/categories/${id}/products`,
        method: "GET"
      },
      function(error, response, result) {
        if (error) {
          console.log(error);
        } else {
          //Recuperation des données
          const json = JSON.parse(result);
          console.log(json);
          json.map(function(product) {
            //chargement dans la base de données
            return client.query(
              "INSERT INTO categories_products VALUES ($1, $2)",
              [categoriesArray.id, product.id],
              function(error, resultQuery) {
                if (error) {
                  console.log(error);
                } else {
                  console.log(resultQuery);
                }
              }
            );
          });
        }
      }
    );
  });
}

//obtainAllProductsFromCategories(["5b6d5901-05c0-465e-ba33-7240227861a2","2adfc302-2799-40a0-b9ed-9b10e000b484"]);
