$(document).ready(function(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://rawg-video-games-database.p.rapidapi.com/developers",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "5d6328f6abmshc6d3103a2851855p1785e8jsneac939d8c1f9"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        devImgArray = [
            "https://upload.wikimedia.org/wikipedia/en/c/c3/Feral_Interactive_logo.png",
            "https://pbs.twimg.com/profile_images/1196563043150204928/X6pfa2YZ_400x400.jpg",
            "https://assets1.ignimgs.com/2020/06/26/ubi-br-1593134740074.jpg",
            "https://gematsu.com/wp-content/uploads/2019/11/SIE-Malaysia_11-08-19.jpg",
            "https://media.contentapi.ea.com/content/dam/eacom/common/stock-news-headers/ea-tile-ea-stock-headers-04-layers-16x9.png.adapt.crop16x9.431p.png",
            "",
            "https://media-exp1.licdn.com/dms/image/C4D1BAQF5lCSszLmbkA/company-background_10000/0?e=2159024400&v=beta&t=omyEK2yR87gWHDLsZkWGm4AXmbEbP4VYd0sigtqQATk",
            "https://www.omgubuntu.co.uk/wp-content/uploads/2016/09/aspyr-logo.png",
            "https://www.licensingmagazine.com/wp-content/uploads/2019/09/CAPCOM-770x513.jpg",
            "https://games-b26f.kxcdn.com/wp-content/uploads/2020/06/warner-bros.-912x456-1280x720-770x470.jpg"
        ];
        for (var i = 0; i < response.results.length; i++) {
            if (i === 5) { }
            else {
                var imgTag = $("<img>");
                imgTag.attr("src", devImgArray[i]);
                imgTag.attr("style", "height: 200px; width: 100%");
                $("#card-" + i).append(imgTag);
                var nameEl = response.results[i].name;
                var titleP = $("<p>").text(nameEl);
                $("#card-" + i).append(titleP);
                var devGameList = $("<ul>").text("Games by this developer:");
                $("#card-" + i).append(devGameList);
                for (var j = 0; j < response.results[i].games.length; j++) {
                    var gameEl = response.results[i].games[j].name;
                    var listEl = $("<li>").text(gameEl);
                    devGameList.append(listEl);
                }

            }
        }
    });
})