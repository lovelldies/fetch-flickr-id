$('#user_form').submit(function(event) {
  event.preventDefault();  // Prevents the default form submission.
  $('#message-div').addClass('hidden');  // Remove any messages on screen.

  const API_KEY = 'ADD_YOUR_API_KEY_HERE';
  var username = $('#user_name').val();

  /**
   * Flickr URI to fetch the ID.
   * More details here: https://www.flickr.com/services/api/flickr.urls.lookupUser.html
   */
  var uri = 'https://api.flickr.com/services/rest/' +
    '?method=flickr.urls.lookupUser' +
    '&api_key=' + API_KEY +
    '&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2F' + username +
    '&format=json&nojsoncallback=1';

  $.getJSON(uri, function(data){

    // Handle and display errors.
    if (data.stat == 'fail') {
      $('#message-div')
        .text('Error: ' + data.code + '. ' + data.message + '.')
        .removeClass()
        .addClass('alert alert-danger')
        .show();
    }

    // Display the User ID.
    if (data.stat == 'ok') {
      $('#message-div')
        .text('All Good! User ID: ' + data.user.id)
        .removeClass()
        .addClass('alert alert-success')
        .show();
    }
  });
});
