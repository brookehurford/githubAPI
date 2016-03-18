var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#githubSearch').submit(function(event){
    $('ul.resultsList').empty();
    event.preventDefault();
    var newRepo = new getRepos();
  })
});
