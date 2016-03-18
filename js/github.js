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
