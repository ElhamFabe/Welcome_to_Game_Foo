$(document).ready(function () {


    var API_KEY = "AIzaSyCzDO1eGoZeLtc0Tl7uvcZRLfoi9344Icc"

    var video = ''


    $("#form").submit(function (event) {
        event.preventDefault()

        var search = $("#search").val()

        videosearch(API_KEY, search, 5)

    });
    function videosearch(key, search, maxResults) {

        $("#videos").empty()

        var queryUrl = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search
        console.log("")
        $.ajax({
            type: 'GET',
            url: queryUrl,
            data: {
                q: search,
                part: 'snippet',
                maxResults: 3,
                type: 'video',
                videoEmbeddable: true,
            },
            success: function (data) {
                console.log("Data: ", data)
                embedVideo(data)
                // data.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
            },
            error: function (error) {
                console.log("Request Failed", error);
            }
        });
        function embedVideo(data) {
            $('.embed1').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
            $('.embed2').attr('src', 'https://www.youtube.com/embed/' + data.items[1].id.videoId)
            $('.embed3').attr('src', 'https://www.youtube.com/embed/' + data.items[2].id.videoId)
            $('.descriptionTitle1').text(data.items[0].snippet.title)
            $('.descriptionTitle2').text(data.items[1].snippet.title)
            $('.descriptionTitle3').text(data.items[2].snippet.title)
            $('.description1').text(data.items[0].snippet.description)
            $('.description2').text(data.items[1].snippet.description)
            $('.description3').text(data.items[2].snippet.description)
        }
        // $.get(queryUrl, function (data) {
        //     console.log(data);

        //     data.items.forEach(item => {
        //         video = `

        //         <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe> 

        //         `

        //         $("#videos").append(video)
        //     });

        // });
    }
});