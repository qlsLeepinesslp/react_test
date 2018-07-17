import React from 'react'
import VideoListItem from '../video_list_item'

const VideoList = (props) => {

    const videoItem = props.videos.map((video, index)=>{
        return <VideoListItem key={video.etag} video={video}/>
    })

    return (
        <ul className="col-md-4 ">
            {videoItem}
        </ul>
    )
}

export default VideoList