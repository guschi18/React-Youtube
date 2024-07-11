import _ from 'lodash';
import React, { Component } from "react";
import ReactDom from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

// Create a new component. This component schould produce
// some HTML

// API KEY Youtube Videos
const API_KEY = 'AIzaSyCzN3QR1mnfVWhrhtzxLhUTwMW0DknN92w';

class App extends Component{
  constructor(props) {
    super(props);

    this.state= { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('thirdweb create erc20 token')
  }

    videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
        });
        // this.setState({ videos: videos}); geht nur wenn beide den gleichen Namen haben. ( videos )
      });
    }



  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return ( 
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
       )
  }
}

// Functional Based Component
// Functional Based Component wird immer bei JSX benutzt 
//Learning:
//JSX and Components
//const App = () => {
//  return ( 
//        <div>
//          <SearchBar />
//        </div>
//         )
//} 

// Take this components generated HTML and put it on the page ( in the DOM) 
// <App /> ist eine instance

ReactDom.render(<App />, document.querySelector('.container'));

