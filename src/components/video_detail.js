import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return <div>Loading...</div>;
    }

    const videoURL = `https://youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoURL}></iframe>
            </div>
            <div className="details">
                <div><h3>{video.snippet.title}</h3></div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;