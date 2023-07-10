import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import './VideoHoriontal.scss'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col, Row } from 'react-bootstrap'
const VideoHoriontal = () => {
  const seconds = moment.duration('1000').asSeconds()
  const _duration = moment.utc(seconds * 1000).format("mm:ss")
  return (
    <Row className='videoHoriontal m-1 py-2 align-align-items-center'>
      <Col xs={6} md={4}
        className='videoHoriontal_left'
      >
        <LazyLoadImage src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
          effect='blur'
          className='videoHoriontal_thumbnail'
          wrapperClassName='videoHoriontal_thumbnail-wrapper'
        />
        <span className='video_top_duration'>{_duration}</span>
      </Col>
      <Col xs={6} md={8}
        className='videoHoriontal_right p-0'
      >
        <p className='videoHoriontal_title mb-1'>
          Bea full stack developeer in 1 month
        </p>
        <div className="videoHoriontal_detai">
          <AiFillEye /> {numeral('10000').format('0.a')} Views  *
          {moment('2020-03-04').fromNow()}
        </div>
        <div className="videoHoriontal_channel d-flex align-align-items-center my-1">

          {/* <LazyLoadImage src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
           effect='blur'
          className='videoHoriontal_thumbnail'
          wrapperClassName='videoHoriontal_thumbnail-wrapper'
          /> */}
          <p>Backen Coder</p>
        </div>
      </Col>
    </Row>
  )
}

export default VideoHoriontal