var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var inputtedUsername = $('input#username').val();
  $.get('https://api.github.com/users/'+ inputtedUsername + '/repos?access_token=' + apiKey + '&per_page=1000').then(function(response){
    console.log(response);
    for (var i = 0; i < response.length; i++) {
      $('ul.resultsList').append('<ul class="resultsItem"><li>' + '<span class="fullName">' + response[i].full_name + '</span></li>' +
                                 '<li>' + response[i].description + '</li>' +
                                 '<li><a class="button" target="_blank" href="' + response[i].html_url + '">View Repo</a></li></ul>');
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
