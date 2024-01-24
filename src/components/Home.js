import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../assets/images/image logo 2.png';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div className='home'>
      <Container >
        <Row>
          <Col className='container m-5 pl-5'>
            <p className='gamification mb-0'>LA GAMIFICATION</p>
            <h1 className='text-white mt-0 home-text2'>PUISSANT LEVIER D’ENGAGEMENT CLIENT </h1>
            <h5 className='text-white me-5 pe-5 home-text3'>Grace aux mécaniques ludiques de nos jeux, booster votre notoriété et créez une
              experience marquante auprès de vos consommateurs afin d’encourager leur adhésion et leur fidélité.</h5>
          </Col>
          <Col>
            <Carousel className='p-5'>
              <Carousel.Item>
                <img src={image1} alt='Carousel Image'/>

              </Carousel.Item>
              <Carousel.Item>
                <img src={image1} alt='Carousel Image' />
              </Carousel.Item>
              <Carousel.Item>
                <img src={image1} alt='Carousel Image'/>

              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Home;