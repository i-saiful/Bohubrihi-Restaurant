import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap'
import CommentForm from './CommentForm';
import LoadComment from './LoadComment';

function DishDetail(props) {
  const { dish, comments } = props
  return (
    <div>
      <Card style={{margin: '10px'}}>
        <CardImg top src={dish.image} alt={dish.name}/>
        <CardBody style={{textAlign: 'left'}}>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <hr />
          <LoadComment comments={comments} />
          <hr />
          <CommentForm dishID={dish.id} addComment={props.addComment}/>
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetail