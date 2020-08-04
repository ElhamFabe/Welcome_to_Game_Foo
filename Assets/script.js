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
            var genreEl = [];
            for(var i = 0; i < response.genres.length; i++){
                genreEl[i] = response.genres[i].name;
                console.log(genreEl[i]);
            }
            var metacriticEl = response.metacritic;
            var developerEl = []; 
            for(var i = 0; i < response.developers.length; i++){    
                developerEl[i] = response.developers[i].name;
                console.log(developerEl[i]);
            }
            var publisherEl = [];
            for(var i = 0; i < response.publishers.length; i++){ 
                publisherEl[i] = response.publishers[i].name;
                console.log(publisherEl[i]);
            }
            var releaseEl = response.released;
            var websiteEl = response.website;
            var platformEl = response.platforms[0].platform.name;

            console.log(nameEL);
            console.log(ratingEl);
            console.log(descriptionEl);
            console.log(imgEl);
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
//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}