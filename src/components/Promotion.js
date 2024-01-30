import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../assets/images/image logo 6.png';
function Promotions() {
    return (
        <div className='Promotions'>
            <Container>
                <Row>
                    <Col md={6}>
                        <Container className='Promotions-container'>
                            <p className='gamification mt-5 pt-5 w-25'>Ayez toutes les cartes en main</p>
                            <h1 className='text-white mt-0 home-text2 w-75'>DES LEVIERS PROMOTIONNELS IMPACTANTS</h1>
                            <h5 className='text-white home-text3 w-75'>Data-Gest est une agence intégrée qui vous accompagne à chaque étape
                            de votre projet et pas seulement dans la réalisation technique de votre jeu. Nos équipes sélectionnent les 
                            meilleures récompenses adaptées à votre cible et gèrent toute la logistique et opération.
                                <br></br>
                                <br></br>
                                Nous vous aidons également à mettre en place des opérations pour générer du trafic en magasin ou sur internet 
                                grâce à notre module d’e-couponning qui permet à vos participants de recevoir par email leur BR.
                                <br></br>
                                <br></br>

                                Notre centre de gestion, nous permet aussi de contrôler de manière qualitative les preuves d’achat si vous 
                                souhaitez mettre en place un jeu avec obligation d’achat. Nous gérons également vos campagnes de communication 
                                par emailings et/ou sms pour accroitre l’impact de votre jeu.
                                <br></br>
                                <br></br>

                                Un autre besoin? nous sommes a votre disposition.
                            </h5>

                            <p className='gamification  '> En savoir plus sur nos solutions  &gt; </p>
                        </Container>
                    </Col>
                    <Col>
                        <Container className='Promotions-bg m-5'>
                            <img className='Promotions-img p-5' src={image} alt='Image' />

                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Promotions;
