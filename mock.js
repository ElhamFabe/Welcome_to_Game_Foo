// $(document).ready(function () {

//     var API_KEY = "AIzaSyDFP6ztViWE4ZBlDrZuTMak8tg6U0O-cHs"
//     var video = ''


//     $("#form").submit(function (event) {
//         event.preventDefault()

//         var search = $("#search").val()

//         videosearch(API_KEY,search,5)

//     });
//     function videosearch(key, search, maxResults) {

//         $("#videos").empty()
//         var queryUrl = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search
//         $.get(queryUrl, function (data) {
//             console.log(data);

//             data.items.forEach(item => {
//                 video = `

//                 <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe> 
                
//                 `

//                 $("#videos").append(video)
//             });

//         });
//     }
// });

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://mpoon-twitch.p.rapidapi.com/games/top?limit=25&offset=0",
	"method": "GET",
	"headers": {
		"authorization": "",
		"x-rapidapi-host": "mpoon-twitch.p.rapidapi.com",
		"x-rapidapi-key": "5d6328f6abmshc6d3103a2851855p1785e8jsneac939d8c1f9"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});