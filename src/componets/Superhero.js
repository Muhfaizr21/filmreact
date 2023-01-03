import {Card,Container,Row,Col,Image} from "react-bootstrap";
import antmanImage from "../assets/antman.jpg"
import avengerImage from "../assets/avenger.jpg"
import batmanImage from "../assets/batman.jpg"
import robinhoodImage from "../assets/robinhood.jpg"
import spidermanImage from "../assets/spiderman-cover.jpg"
import supermanImage from "../assets/superman.jpg"

const Superhero = () => {
 return (
    <div>
        <Container>
            <br/>
            <br/>
            <h1 className="text-white">SUPERHERO MOVIES</h1>
            <Row >
            <Col md={4} className="movieWrapper" id="superhero">
            <Card className="text-center  movieImage "  >
              <Image src={antmanImage} alt="Dune Movies" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">ANTMAN</Card.Title>
                <Card.Text className="Text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>            
              </div>
            </Card>
            </Col>
            <Col md={4} className="movieWrapper">
            <Card className="text-center  movieImage "  >
              <Image src={avengerImage} alt="Dune Movies" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">AVENGER</Card.Title>
                <Card.Text className="Text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>            
              </div>
            </Card>
            </Col>
            <Col md={4} className="movieWrapper">
            <Card className="text-center  movieImage "  >
              <Image src={batmanImage} alt="Dune Movies" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">BATMAN</Card.Title>
                <Card.Text className="Text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>            
              </div>
            </Card>
            </Col>
            <Col md={4} className="movieWrapper">
            <Card className="text-center  movieImage "  >
              <Image src={robinhoodImage} alt="Dune Movies" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">ROBINHOOD</Card.Title>
                <Card.Text className="Text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>            
              </div>
            </Card>
            </Col>
            <Col md={4} className="movieWrapper">
            <Card className="text-center  movieImage "  >
              <Image src={spidermanImage} alt="Dune Movies"className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">SPIDERMAN</Card.Title>
                <Card.Text className="Text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>            
              </div>
            </Card>
            </Col>
            <Col md={4} className="movieWrapper">
            <Card className="text-center  movieImage "  >
              <Image src={supermanImage} alt="Dune Movies" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">SUPERMAN</Card.Title>
                <Card.Text className="Text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>            
              </div>
            </Card>
            </Col>
            </Row>
        </Container>
    </div>
);
}

export default Superhero