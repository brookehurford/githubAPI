(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "4814bf6eccf203b472de472aedcf9dd16c5cc922";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var inputtedUsername = $('input#username').val();
  $.get('https://api.github.com/users/'+ inputtedUsername + '/repos?access_token=' + apiKey + '&per_page=1000').then(function(response){
    console.log(response);
    for (var i = 0; i <= response.length; i++) {
      $('ul.resultsList').append('<li>' + '<span class="fullName">' + response[i].full_name + '</span>' + '<br>' +
                                  response[i].description + '<br>' +
                                  '<a class="button" target="_blank" href="' + response[i].html_url + '">View Repo</a>' +
                                 '</li>');
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

},{"./../.env":1}],3:[function(require,module,exports){
var getRepos = require('./../js/github.js').getRepos;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('form#githubSearch').submit(function(event){
    event.preventDefault();
    var newRepo = new getRepos();
  })
});

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
