function getVideo() {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: 'AIzaSyBvfxzWGh7KkbNi3DeIU03A_YW2oIVQ9Fk',
      q: "harry potter sorting hat",
      part: 'snippet',
      maxResults: 1,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function (data) {
      embedVideo(data)
    },
    error: function (error) {
      console.log("Request Failed", error);
    }
  });
}

function embedVideo(data) {
  $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
}

getVideo();
