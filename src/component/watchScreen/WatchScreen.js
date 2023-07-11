import React, { useEffect } from 'react'
import './WatchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import VideoMetaDta from '../videoMetaDta/VideoMetaDta'
import VideoHoriontal from '../VideoHoriontal/VideoHoriontal'
import Comments from '../comment/Comments'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoId } from '../../redux/action/video.action'
const WatchScreen = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getVideoId(id))
    },[dispatch,id])
    const {videos, loading } = useSelector(state => state.selectedVideo)
    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen_player">
                    <iframe width="100%" height="100%"
                        src={`https://www.youtube.com/embed/${id}`}
                        frameborder="0"
                        title={videos?.snippet?.title}
                        allowFullScree
                        >
                    </iframe>
                </div>
                {
                    !loading?<VideoMetaDta videos={videos} videoId={id} />:<h6>Loading</h6>
                }
                <Comments/>
            </Col>
            <Col lg={4}>
            {
                [...Array(10)].map(()=>(
                    <VideoHoriontal/>
                )
                )
            }
            </Col>
        </Row>
    )
}

export default WatchScreen