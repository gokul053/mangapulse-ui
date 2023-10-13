import { Card, Col } from "react-bootstrap";

const DisplayCard = ({imageLink, name}) => {
    return(
        <>
        <Col sm={3} className="py-2">
            <Card className="p-2 rounded-0">
            <Card.Img variant="top" className="rounded-0" height={180} src={imageLink} />
            <Card.Body className="p-0 pt-1">
                <Card.Text>
                {name}
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        </>
    );
}

export default DisplayCard;