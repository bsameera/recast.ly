var searchYouTube = (options, callback) => {
  // TODO
  // options.part = 'snippet';
  // options.type = 'video';
  // options.videoEmbeddable = true;  
  console.log('here');
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: { 
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      max: 5,
      key: window.YOUTUBE_API_KEY
    },
    success: function(data) {
      // specify the array component of the data object
      console.log(data.items);
      //videoArray = data.items;
      callback(data.items);
    }    
  });
};

window.searchYouTube = searchYouTube;
