$(document).ready(function () {
    $("#find-game").on("click", function (event) {
        event.preventDefault();

        var game = $("#game-input").val();
        var dashedGame = game.replace(/ /g, "-");
        console.log(dashedGame);

        var queryURL = "https://rawg-video-games-database.p.rapidapi.com/games/" + dashedGame;

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": queryURL,
            "method": "GET",
            // "success": function();
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "459bb2a183mshc0681ca6ce8d05cp17f108jsnec2b6aceda17"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            var nameEL = response.name;
            var ratingEl = response.esrb_rating.name;
            var descriptionEl = response.description_raw;   
            var imgEl = response.background_image;
            var clipEl = response.clip.clip;
            var genreEl = response.genres[0].name;
            var metacriticEl = response.metacritic;
            var developerEl = response.developers[0].name;
            var publisherEl = response.publishers[0].name;
            var releaseEl = response.released;
            var websiteEl = response.website;
            var platformEl = response.platforms[0].platform.name;

            console.log(nameEL);
            console.log(ratingEl);
            console.log(descriptionEl);
            console.log(imgEl);
            console.log(clipEl);
            console.log(genreEl);
            console.log(metacriticEl);
            console.log(developerEl);
            console.log(publisherEl);
            console.log(releaseEl);
            console.log(websiteEl);
            console.log(platformEl);
        });
    });
});