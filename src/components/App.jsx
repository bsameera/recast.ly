class App extends React.Component {
  constructor(props) {
    super(props);
    // set the initial state
    this.state = {video: window.exampleVideoData[0], videos: window.exampleVideoData, text: ''};
    this.clickVideo = this.clickVideo.bind(this); 
    // this.clickSearch = this.clickSearch.bind(this);
    this.updateText = this.updateText.bind(this);
    this.youtubeData = this.youtubeData.bind(this);
    window.searchYouTube({}, this.youtubeData);

  }
  
  youtubeData(videos) {
    this.setState({video: videos[0]});
    this.setState({videos: videos});
  }

  updateText(newText) {
    //this.setState({});
    console.log('here');
    this.setState({text: newText.target.value});
  }

  clickVideo(e) {
    //this.setState({});
    this.setState({video: e});
  }
  
  // clickSearch(optionObj) {
  //   this.setState({options: optionObj});
  // }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search onChangeText={this.updateText}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} onClick={this.clickVideo}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// var App = (props) => {
//   return (
//     <div>
//       <VideoList videos={window.exampleVideoData}/>
//       <div>
//         <nav className="navbar">
//           <div className="col-md-6 offset-md-3">
//             <div><h5><em>search</em> view goes here</h5></div>
//           </div>
//         </nav>
//         <div className="row">
//           <div className="col-md-7">
//             <div><h5><em>videoPlayer</em> view goes here</h5></div>
//           </div>
//           <div className="col-md-5">
//             <div><h5><em>videoList</em> view goes here</h5></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
