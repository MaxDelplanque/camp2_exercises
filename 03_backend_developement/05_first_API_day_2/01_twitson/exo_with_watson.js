const request = require("request");

const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const url = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

const text = "Every breath you take,Every move you make,Every bond you break,Every step you take,I'll be watching you";
const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);


request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(body);
  }
});
