import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/images/image logo 3.png';
function Dashboard() {
    return (

        <div className='Dashboard w-100'>
            <Row className='w-100'>
                <Col >
                    <Container className='Dashboard-bg mt-4 ms-4'>
                        <img className='w-75 dashboard-img p-5' src={image} alt='Image' />

                    </Container>
                </Col>
                <Col className='ps-5'>
                    <p className='gamification mt-5 pt-5 w-25'> Gagner efficacité</p>
                    <h1 className='text-white mt-0 home-text2 w-75'>NOS SOLUTIONS DE GAMIFICATION</h1>
                    <h5 className='text-white home-text3 w-75'>Si certains programmes de récompenses et
                        de simulation des ventes peuvent être perçus comme
                        répétitifs et routiniers, il existe des moyens simple pour réaliser des campagnes interactives et ludiques auprès de
                        vos clients.</h5>
                        
                    <p className='gamification  '> En savoir plus sur nos solutions </p>    
                </Col>
            </Row>

        </div>
    );
}

export default Dashboard;