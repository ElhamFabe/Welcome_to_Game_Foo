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
            $("#game-section").empty();
            console.log(response);
            if(response.name != null){
                var nameEl = response.name;
                console.log(nameEl);
                var titleH = $("<h3>").text("Name: " + nameEl);
                $("#game-section").append(titleH);
            }

            if(response.background_image != null){
                var imgEl = response.background_image;
                console.log(imgEl);
                var imgTag = $("<img>");
                imgTag.attr("src", imgEl);
                $("#game-section").append(imgTag);
            }

            if(response.esrb_rating != null){
                var ratingEl = response.esrb_rating.name;
                console.log(ratingEl);
                var ratingP = $("<p>").text("Rating: " + ratingEl);
                $("#game-section").append(ratingP);
            }

            if(response.description != null){
                var descriptionEl = response.description_raw;   
                console.log(descriptionEl);
                var descriptionP = $("<p>").text("Description: " + descriptionEl)
                $("#game-section").append(descriptionP);
            }
           
            //need to work with array for multiple genres
            // var genreEl = [];
            // if(response.genres != null){
            //     for(var i = 0; i < response.genres.length; i++){
            //         genreEl[i] = response.genres[i].name;
            //         console.log(genreEl[i]);
            //     }
            // }
            

            if(response.metacritic != null){
                var metacriticEl = response.metacritic;
                console.log(metacriticEl);
                var metacriticP = $("<p>").text("Rating: " + metacriticEl);
                $("#game-section").append(metacriticP);
            }
            
            //need to work with array for developers
            // var developerEl = [];
            // if(response.developers != null){ 
            //     for(var i = 0; i < response.developers.length; i++){    
            //         developerEl[i] = response.developers[i].name;
            //         console.log(developerEl[i]);
            //     }
            // }
            
            //need to work with array for publishers
            // var publisherEl = [];
            // if(response.publishers != null){
            //     for(var i = 0; i < response.publishers.length; i++){ 
            //         publisherEl[i] = response.publishers[i].name;
            //         console.log(publisherEl[i]);
            //     }
            // }
            
            if(response.release != null){
                var releaseEl = response.released;
                console.log(releaseEl);
                var releaseP = $("<p>").text("Release Date: " + releaseEl);
                $("#game-section").append(releaseP);
            }
            
            if(response.website != null){
                var websiteEl = response.website;
                console.log(websiteEl);
                var websiteP = $("<a>").attr("href", websiteEl)
                websiteP.text(response.name + "'s Website");
                $("#game-section").append(websiteP);
            }
            
            //need to work with array for multi platform games
            // if(response.platforms[0].platform.name != null){
            //     var platformEl = response.platforms[0].platform.name;
            //     console.log(platformEl);
            // }
        });
    });

    $("#clear-search").on("click", function (event) {
        $("#game-section").empty();
        document.getElementById("game-input").value = '';
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