const request = require("request");

const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_PASSWORD;
const url = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");


function emotionWithWatson(text, callback){
  const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
  request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
    if (error) {
      console.log(error);
    } else {
      console.log(text);
      const emotionParsed = JSON.parse(body).emotion.document.emotion;
      return console.log(callback(emotionParsed));
    }
  });
}

module.exports = emotionWithWatson;
