/**
 * Created by Palaparthi on 7/21/17.
 */

import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (<VideoListItem
            key = {video.etag}
            video = {video}
            onVideoSelect = {props.onVideoSelect}/>);
    });

  return (
      <ul className="col-md-4 list-group">
          {videoItems}
      </ul>
  );
};

export default VideoList;
