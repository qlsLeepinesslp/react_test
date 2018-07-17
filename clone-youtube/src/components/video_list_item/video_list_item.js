import React from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {
    // console.log(video)
    const imageUrl = video.snippet.thumbnails.default.url

    return (
        <li className="list-group-item" onClick={()=>{onVideoSelect(video)}}>
            <div className="video-list-media video-item">
                <div className="media-left">
                    <img className="media-object" alt="test" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        { video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem