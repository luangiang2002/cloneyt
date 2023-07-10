import React from 'react'
import './WatchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import VideoMetaDta from '../videoMetaDta/VideoMetaDta'
import VideoHoriontal from '../VideoHoriontal/VideoHoriontal'
import Comments from '../comment/Comments'
const WatchScreen = () => {
    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen_player">
                    <iframe width="100%" height="100%"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                        frameborder="0"
                        title='MY VIDEO'
                        allowFullScree
                        >
                    </iframe>
                  
                </div>
                <VideoMetaDta/>
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