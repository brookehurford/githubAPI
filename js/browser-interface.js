var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#githubSearch').submit(function(event){
    event.preventDefault();
    var newRepo = new getRepos();
  })
});

// for (var 0 = i; i > response.length; i++){
//   $('#searchResults').append(response[i].description);
// }
