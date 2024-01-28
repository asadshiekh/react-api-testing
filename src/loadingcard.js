import Col from 'react-bootstrap/Col';
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';


import React from 'react'

function loadingcard() {
  return (
  

        <Col sm={12} md={4}>
            <Card style={{ minHeight: '250px' }}>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} sm={10} md={20} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={8} /> 
                <Placeholder xs={8}  /> 
                <Placeholder xs={16} />{' '}
                <Placeholder xs={8} /> 
                <Placeholder xs={10} />
                </Placeholder>
            </Card.Body>
            </Card>
        </Col>
  )
}

export default loadingcard
