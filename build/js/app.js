(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "4814bf6eccf203b472de472aedcf9dd16c5cc922";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getUserRepo = function(){
  var inputtedUsername = $('input#username').val();
  $.get('https://api.github.com/users/'+ inputtedUsername + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('.userInfo').append('<a href="' + response.html_url + '">' + response.name + '</a>' + response.location + '<img src="' + response.avatar_url + '">');
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.getRepos = function(){
  var inputtedUsername = $('input#username').val();
  $.get('https://api.github.com/users/'+ inputtedUsername + '/repos?access_token=' + apiKey + '&per_page=1000&sort=update').then(function(response){
    for (var i = 0; i < response.length; i++) {
      $('ul.resultsList').append('<ul class="resultsItem"><li>' + '<span class="fullName">' + response[i].full_name + '</span></li>' +
                                 '<li>' + response[i].description + '</li>' +
                                 '<li><a class="button" target="_blank" href="' + response[i].html_url + '">View Repo</a></li></ul>');
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
