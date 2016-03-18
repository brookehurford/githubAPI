var getUserRepo = require('./../js/github.js').getUserRepo;
var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $(".userInfo").hide();
  $('form#githubSearch').submit(function(event){
    $(".userInfo").show();
    $('ul.resultsList').empty();
    $('.userInfo').empty();
    event.preventDefault();
    var newUserRepo = new getUserRepo();
    var newRepo = new getRepos();
  })
});
