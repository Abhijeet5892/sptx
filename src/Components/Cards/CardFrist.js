import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardFrist = () => {
  return (
    <Card style={{ backgroundColor: 'black' }}>
    <Card.Body className="d-flex align-items-center">
      <div>
        <h5 style={{ color: 'White' }}>Section</h5>
      </div>
      <div className="ms-auto">
      <Button variant="dark"><img src={process.env.PUBLIC_URL + '/Assets/img13.png'} />&nbsp;&nbsp;0.2 $XYZ &nbsp;&nbsp;<img src={process.env.PUBLIC_URL + '/Assets/img18.png'} /></Button>
      </div>
    </Card.Body>
  </Card>
  )
}

export default CardFrist
