// Let's write a function called simpleGet(callback) where the callback
// is a function with the parameter result. This function will perform
// a query on https://postman-echo.com/get and execute the callback by
// passing only the result of the query.

//Let's write a function called simpleGetWithParams(callback) where
//the callback is a function with the parameter result. This function
//will perform a query on https://postman-echo.com/get with a parameter
//foo which is equal to bar, a parameter program which is equal to camp2
//and a parameter people which is an array with the values Frieda and Francis,
//and execute the callback by passing only the field args from the
//result of the query.

//Using the object Date, let's write a function called
//validateTimestamp(callback) where the callback is a function with
//the parameter result. This function will perform a query on
//https://postman-echo.com/time/valid with a parameter timestamp wich is
//equal to the current date with the format YYYY-mm-dd and execute the
//callback by passing only the result of the query.
//Be careful, the Date may have a risky behavior, you should test that
//it works before using it!

const request = require("request");

function simpleGet(callback){
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

// function output(toto) {
//   console.log(toto);
// }
//
// simpleGet(output);

function simpleGetWithParams(callback){
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function(error, response, result) {
      callback(JSON.parse(result).args);
    }
  );
}

function validateTimestamp(callback) {
  const today = new Date();
  const YYYY = today.getFullYear();
  const mm = today.getMonth();
  const dd = today.getDate();
  const date = YYYY + "-" + mm + "-" + dd;
  //const date2 = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  request(
    {
      url: "https://postman-echo.com/time/valid?timestamp=" + date, //ou date2
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

module.exports = {
  simpleGet:simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};
