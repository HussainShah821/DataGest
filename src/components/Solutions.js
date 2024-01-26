import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/images/image logo 4.png';
function Solutions() {
  return (
    <div className='Solutions'>
        <Container>
      <Row>
        <Col>
        <Container>
        <p className='gamification mt-5 pt-5 w-25'> Faites vos jeux</p>
                    <h1 className='text-white mt-0 home-text2 w-75'>DES SOLUTIONS 100% PERSONNALISES</h1>
                    <h5 className='text-white home-text3 w-75'>Personnalisez votre jeu promotionnel à partir
                    de notre catalogue de mécaniques simples et percutantes. Définissez votre scénario et 
                    votre créa afin de booster votre notoriété et offrir a vos participants un parcours clients ludique et original.</h5>
                        
                    <p className='gamification  '> En savoir plus sur nos solutions  &gt; </p>   
        </Container>
        </Col>
        <Col> 
        <Container className='Solutions-bg m-5'>
                        <img className='Solutions-img p-5' src={image} alt='Image' />

                    </Container>
                    </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Solutions;