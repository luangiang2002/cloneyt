import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../component/categories/CategoriesBar'
import Video from '../../component/video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideo } from '../../redux/action/video.action'

const HomeSreen = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPopularVideo())
    },[dispatch])
    const {videos} =useSelector(state=>state.homeVideos)
    return (
        <Container className=''>
            <CategoriesBar />
            <Row>
                {videos.map((video) => (
                    <Col lg={3} md={4} key={video.id}>
                        <Video video={video}  />
                    </Col>

                    
))}
            </Row>
        </Container>
    )
}

export default HomeSreen