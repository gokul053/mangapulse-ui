import { Col, Container, Nav, Row } from "react-bootstrap";
import DisplayCard from "../components/DisplayCard";
import androidStore from "../assets/images/android_app.png";
import iosStore from "../assets/images/ios_app.png";

const MangaPage = () =>{
    const genreLables = ["Action","Adventure", "Thriller","Romance","Comedy","Dark"];

    return( 
        <>
            <Container>
                <Row>
                    <Col sm={9} className="px-5" >
                        <Row className="infoPanel"><span>Manga</span></Row>
                        <Row className="subInfoPanel">
                            <Nav className="me-auto">
                                {genreLables.map((genre)=>{
                                    return(
                                        <Nav.Link>{genre}</Nav.Link>
                                    );
                                })}
                            </Nav>
                        </Row>
                        <Row className="subInfoPanel mt-3 p-2">
                            <DisplayCard imageLink="https://th.bing.com/th/id/OIP.Qg23zDyzogwoXINSTJyfbAHaKX?pid=ImgDet&rs=1" name="Jujutsu Kaisen"/>
                        </Row>
                    </Col>
                    <Col sm={3} className="px-1 border-top border-bottom border-dark-subtle">
                        <div className="fw-bold mt-3">Mangapulse available on your android or iphone!</div>
                        <div className="mt-1">Download Mangapulse and enjoy latest manga on your phone...</div>
                        <Row className="mt-3"><Col className="pe-0 d-flex justify-content-start"><img src={androidStore} height={40} width={130} alt="androidStore" /></Col><Col className="p-0 d-flex justify-content-start"><img height={40} width={130} src={iosStore} alt="iosStore" /></Col></Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MangaPage;