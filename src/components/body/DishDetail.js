import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import LoadComment from './LoadComment';

function DishDetail({dish, comments}) {
  return (
    <div>
      <Card style={{margin: '10px'}}>
        <CardImg top src={dish.image} alt={dish.name}/>
        <CardBody style={{textAlign: 'left'}}>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <hr />
          <LoadComment comments={comments} />
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetail