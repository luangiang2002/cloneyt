import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import CategoriesBar from '../../component/categories/CategoriesBar'
import Video from '../../component/video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideo, getVideoByCategory } from '../../redux/action/video.action'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../component/skeleton/SkeletonVideo'
const HomeSreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideo())
    }, [dispatch])
    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)
    // console.log(videos);
    const fetchData = () => {
        if (activeCategory === 'All')
            dispatch(getPopularVideo())
        else {
            dispatch(getVideoByCategory(activeCategory))
        }
    }
    return (
        <Container>
            <CategoriesBar />
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className='spinner-border text-danger d-block mx-auto '></div>
                }
                className='row'
            >
                {!loading ? videos.map((video, index) => (
                    <Col lg={3} md={4} key={index}>
                        <Video video={video} />
                    </Col>
                ))
                    :
                    [...Array(20).map(() =>
                        <Col lg={3} md={4}>
                           <SkeletonVideo/>
                        </Col>
                    )]
                }
            </InfiniteScroll>
        </Container>
    )
}

export default HomeSreen