var request = require('request');
var Twitter = require('twitter');
var spotify = require('spotify');
// var fs = require('fs');
// var keys = require('./keys');

var myArgs = process.argv.slice(2);
// console.log("your args: " + myArgs);

switch (myArgs[0]) {
   case 'my-tweets':
     console.log('Here are stanDev17 tweets: ');
     getTweets();
     break;
   case 'movie-this':
     movieThis();
     break;
   case 'spotify-this-song':
     console.log(myArgs[1], 'is really cool.');
     break;
   default:
     console.log('I dont know how to do that.');
 }


function movieThis() {
  var movie = myArgs[1];
  var key = "40e9cece";
  var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + key;

  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Released: " + JSON.parse(body).Released);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[1].Value);
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Starring: " + JSON.parse(body).Actors);
      console.log("Plot: " + JSON.parse(body).Plot);
    }
  });
}


function getTweets() {

var client = new Twitter({
  consumer_key: 'aitnGgFRnFGoDvRocWN0m6Lnh',
  consumer_secret: '30DpXsby3YXMgONhAE2FTFedLZ8lZWSm473A97ubD7DIctlw7c',
  access_token_key: '882640407468818435-cMcPb7Zo2NiiI52ll0YmbflKerdADiV',
  access_token_secret: '6iFBdfmcoq4nnSrdDpCGo5ZkPKZffYmWfslcr08M4qZ5E'
});

client.get('statuses/user_timeline', { screen_name: '@stanDev17', count: 20 }, function(error, tweets, response) {
   if (!error) {
     for (var i = 0; i < tweets.length; i++) {
     console.log(tweets[i].created_at + " : " + tweets[i].text);
     }
   }
 });
}
