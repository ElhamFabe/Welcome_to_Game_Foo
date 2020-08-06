$(document).ready(function(){
    var queryURL = "https://rawg-video-games-database.p.rapidapi.com/games";

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
        console.log(response.results);
        for (var i = 0; i < 3; i++) {
            randomIndex = Math.floor(Math.random() * response.results.length);
            console.log(randomIndex);
            if (response.results[randomIndex].background_image != null) {
                var imgEl = response.results[randomIndex].background_image;
                var imgTag = $("<img>");
                imgTag.attr("src", imgEl);
                imgTag.attr("style", "height: 200px; width: 100%");
                $("#card-overlay-" + i).append(imgTag);
            }
            if (response.results[randomIndex].name != null) {
                var nameEl = response.results[randomIndex].name;
                var titleP = $("<p>").text(nameEl);
                $("#card-" + i).append(titleP);
            }
            if (response.results[randomIndex].metacritic != null) {
                var ratingEl = response.results[randomIndex].metacritic;
                var ratingP = $("<p>").text("Metacritic: " + ratingEl);
                $("#card-" + i).append(ratingP);
            }
            var gameGenreList = $("<ul>").text("Genre(s):");
            $("#card-" + i).append(gameGenreList);
            for (var j = 0; j < response.results[randomIndex].genres.length; j++) {
                var genreEl = response.results[randomIndex].genres[j].name;
                var listEl = $("<li>").text(genreEl);
                gameGenreList.append(listEl);
            }
            response.results.splice(randomIndex, 1);
            console.log(response.results);
        }
    });
});