import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/images/image logo 5.png';
function Expert() {
    return (
        <div className='Expert'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Container className='Expert-bg m-2'>
                            <img className='Expert-img p-5' src={image} alt='Image' />

                        </Container>
                    </Col>
                    <Col>
                        <Container >
                            <p className='gamification mt-5 pt-5 w-50'> Misez sur le bon cheval</p>
                            <h1 className='text-white mt-0 home-text2 w-75'>UNE EQUIPE D’EXPERT
                                A VOTRE SERVICE</h1>
                            <h5 className='text-white home-text3 w-75'>Nous prenons en main votre projet de jeu a A à Z.
                                En fonction de votre besoin, nous imaginons pour vous une mécanique de jeu adaptée et  
                                assurons un développement technique de qualité grâce a des technologies éprouvées. Un 
                                chargé de projet vous est dédié. Ill coordonne son équipe pour mener à bien votre opération 
                                dans le respect de votre cahier ds charges et des délais</h5>

                            <p className='gamification  '> En savoir plus sur nos solutions  &gt; </p>
                        </Container>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Expert;