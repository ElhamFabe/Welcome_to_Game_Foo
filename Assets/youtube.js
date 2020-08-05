var youtubeKey = "[AIzaSyD0-zt1iIE2Jrk3fEwN9jCgBEvdZckoK4I]"
var urlYoutube = "https://www.googleapis.com/youtube/v3/search?part=id&q=tuto&type=video&key=" + youtubeKey
// Request Function
function getVideo(searchInfo) {
    console.log("Get Video was called")
    $.ajax({
      type: 'GET',
      url: urlYoutube,
      data: {
          q: searchInfo,
          part: 'snippet',
          maxResults: 3,
          type: 'video',
          videoEmbeddable: true,
      },
      success: function(data){
        console.log(data)  
        embedVideo(data)
        // data.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
      },
      error: function(response){
          console.log("Request Failed");
      }
    });
  }
// Using the Data Received from our Request
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
// Call the function to search
$(".searchBtn").on("click", function() {
    var textBox = $("#game-Input").val()
    getVideo(textBox);
    console.log(textBox)
})