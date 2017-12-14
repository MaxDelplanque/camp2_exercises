const tweetTextByName = require("./twitter");
const emotionWithWatson = require("./watson");

// fonction prend text et un callback,
// execute une fonction qui va chercher les tweets et qui recupère le texte des tweet,
// on map sur les texts, on les prend un par un et on appelle watson à qui on récupère une émotion qu'on affiche'


function watsonATweet(text,callback) {
  tweetTextByName(text, function(tweets) {
    tweets.map(tweet => emotionWithWatson(tweet, function(emotion) {
      callback(emotion);
    }));
  });
}

watsonATweet("decathlon",console.log);
