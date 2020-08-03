$("#find-game").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var game = $("#game-input").val();

    // Here we construct our URL
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/games",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "459bb2a183mshc0681ca6ce8d05cp17f108jsnec2b6aceda17"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of game-view

    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#game-view").text(JSON.stringify(response));
    });

    // -----------------------------------------------------------------------

  });