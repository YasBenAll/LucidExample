  
import React from "react";
import ReactPlayer from 'react-player';

const res = 1280/720
const height = 425

const Video = (video) => {
  return (
    <div>
        <ReactPlayer 
        controls 
        width = {res*height}
        height = {height}
        url= {video.video}
        config={{ 
        file: { 
            attributes: {
            controlsList: 'nodownload',
            onContextMenu: e => e.preventDefault()
            } 
              } 
        }}
        />
    </div>
  );
}

export default Video;