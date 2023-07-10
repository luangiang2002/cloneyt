import React from 'react'
import './video.scss'
import {AiFillEye} from 'react-icons/ai'
const Video = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img src="https://i.stack.imgur.com/UPa95.png" alt="" />
        <span>05:43</span>
      </div>
      <div className="video_title">
        Create app in 5 minutes #made by Chintu
      </div>
      <div className="video_details">
        <span>
          <AiFillEye/> 5m View *
        </span>
        <span>5 days ago</span>
      </div>
      <div className="video_channel">
        <img src="https://i.stack.imgur.com/y63U9.png" alt="" />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  )
}

export default Video