// var getRepo = require('./../js/github.js').getRepo;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#githubSearch').submit(function(event){
    event.preventDefault();
    var inputtedUsername = $('input#username').val();

    $.get('https://api.github.com/users/'+ inputtedUsername + '?access_token=' + apiKey).then(function(response){
      console.log(response);
      $('.searchResults').text(response.public_repos);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  })
});
