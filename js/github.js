var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  var inputtedUsername = $('input#username').val();
  $.get('https://api.github.com/users/'+ inputtedUsername + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for (var i = 0; i <= response.length; i++) {
      $('ul.resultsList').append('<li>' + '<span class="fullName">' + response[i].full_name + '</span>' + '<br>' +
                                  response[i].description +
                                 '</li>');
    };
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
