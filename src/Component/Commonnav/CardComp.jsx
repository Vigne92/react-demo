import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
} from 'reactstrap';

function CardComp(props) {
    return (

        <Card
            style={{
                width: '18rem'
            }}>
            <img alt="Sample"src={props.img} width="100px" height="100px" />
            <CardBody>
                {/* <CardTitle tag="h5">
                {props.head}
                </CardTitle> */}
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6" >
                    Price: {props.rate}
                </CardSubtitle>
                <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>

    )
}

export default CardComp;