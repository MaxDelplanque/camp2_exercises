const tweetTextByName = require("./twitter");
const emotionWithWatson = require("./watson");

// fonction prend text et un callback,
// execute une foction qui va chercher les tweet et qui recupere le texte des tweet,
// on map sur les text on les prend un par un et on appelle watson a qui on récupere une émotion et qu 'on affiche'


function watsonATweet(text,callback) {
  tweetTextByName(text, function(tweets) {
    tweets.map(tweet => emotionWithWatson(tweet, function(emotion) {
      callback(emotion);
    }))
  })
}

watsonATweet("decathlon",console.log);
