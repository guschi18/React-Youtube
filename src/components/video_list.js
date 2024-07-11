import React from 'react';
import VideoListItem from './video_list_item';

// Functional Based Component
// erhält die (props) videos von seinem Parent Index.js
//.map ich eine Fukntion von React um Arrays als Liste wiederzugeben

const VideoList = (props) => {
  const videoItems = props.videos.map((video) =>{
    return (
    <VideoListItem 
    onVideoSelect={props.onVideoSelect}
    key={video.etag} 
    video={video} />
  );
  })
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;