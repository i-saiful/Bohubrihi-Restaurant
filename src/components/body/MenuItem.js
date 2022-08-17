import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

export default function MenuItem({ dish, onDishSelete }) {
    return (
        <div>
            <Card style={{ margin: '10px' }}>
                <CardBody>
                    <CardImg width='100%' alt={dish.name}
                        src={dish.image}
                        style={{ opacity: '.5' }} />
                    <CardImgOverlay>
                        <CardTitle
                            style={{ cursor: "pointer" }}
                            onClick={onDishSelete}
                        >{dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}
