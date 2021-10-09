import React from 'react';
import VideoCard from './VideoCard';
import './VideoList.css';



function VideoList(){
	return (
		<center className="videoList">
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
		</center>
	)
}

export default VideoList;