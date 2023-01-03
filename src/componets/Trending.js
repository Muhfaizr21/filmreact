import {Card,Container,Row,Col,Image} from "react-bootstrap";
import duneImage from "../assets/dune.jpg"
import everythingImage from "../assets/everything.jpg"
import infiniteImage from "../assets/infinite.jpg"
import jokerImage from "../assets/joker.jpg"
import lightyearImage from "../assets/lightyear.jpg"
import morbiusImage from "../assets/morbius.jpg"

const Trending = () => {
 return (
    <div>
        <Container>
            <br/>
            <br/>
            <h1 className="text-white">TRENDING MOVIES</h1>
            <Row >
            <Col md={4} className="movieWrapper" id="trending">
            <Card className="text-center  movieImage "  >
              <Image src={duneImage} alt="Dune Movies" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Dune</Card.Title>
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
              <Image src={everythingImage} alt="Dune Movies" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">EVERYTHING EVERYWHERE</Card.Title>
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
              <Image src={infiniteImage} alt="Dune Movies" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">INFINITE</Card.Title>
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
              <Image src={jokerImage} alt="Dune Movies" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">JOKER</Card.Title>
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
              <Image src={lightyearImage} alt="Dune Movies"className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">LIGHT YEAR</Card.Title>
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
              <Image src={morbiusImage} alt="Dune Movies" className="images"/>
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">MORBIUS</Card.Title>
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

export default Trending