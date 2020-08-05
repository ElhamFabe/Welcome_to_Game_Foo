$(document).ready(function () {

    var youtubeKey = "[AIzaSyD0-zt1iIE2Jrk3fEwN9jCgBEvdZckoK4I]"
    var video=""
    $("#form").submit(function (event) {
        event.preventDefault()

        var search = $("search").val()

        videosearch(API_KEY, search, 5)

    })
    function videosearch(key, search, maxresults) {
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function (date) {
            console.log(data);

        });
    }
});
