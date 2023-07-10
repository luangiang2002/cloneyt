import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../component/categories/CategoriesBar'
import Video from '../../component/video/Video'

const HomeSreen = () => {
    return (
        <Container className=''>
            <CategoriesBar />
            <Row>
                {[...new Array(20)].map(() => (
                    <Col lg={3} md={4}>
                        <Video/>
                    </Col>

                    
))}
            </Row>
        </Container>
    )
}

export default HomeSreen