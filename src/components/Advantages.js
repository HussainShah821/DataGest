import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/images/lampe.png';
import img2 from '../assets/images/livre.png';
import img3 from '../assets/images/mdi_target-arrow.png';
import img4 from '../assets/images/mdi_people-group.png';
import img5 from '../assets/images/mdi_brain-freeze-outline.png';
import img6 from '../assets/images/fluent_chat-mail-20-regular.png';
import img7 from '../assets/images/system-uicons_graph-increase.png';
function Advantages() {
    return (
        <>
            <div className='Dashboard pb-2'>
                <p className='advantages-text1 pt-5'>
                    Tirez votre épingle du jeu
                </p>
                <p className='advantages-text2'>
                    LES AVANTAGES DE LA GAMIFICATION
                </p>
                <div className='line-seg mx-auto'>
                    <hr className="mx-auto " />
                </div>
                <div className='Container w-75 mx-auto mt-5 p-5 Dashboard-container' >
                    <Row>
                        
                        <Col md={1} className='mx-4' > <div className='image-container1 pt-1 ps-1'>
                            <div className='image-container'>
                                <Image src={img1} className='roundedCircle' />
                                <p className='advantages-text3'>Originalité</p>
                            </div>
                        </div>
                            <div className='vertical-line '></div>
                             <div className='num-container pt-1'>
                               
                                <p className='advantages-text4'>01</p>
                            </div>
                           
                            
                                </Col>

                        <Col md={1} className='mx-4'>  <div className='image-container1 pt-1 ps-1'>
                            <div className='image-container'>
                                <Image src={img2} className='roundedCircle' />
                                <p className='advantages-text3'>Pedagogie</p>
                            </div>
                        </div>
                            <div className='vertical-line '></div>
                             <div className='num-container pt-1'>
                               
                                <p className='advantages-text4'>02</p>
                            </div>
                            
                            </Col>
                        <Col md={1} className='mx-4'> <div className='image-container1 pt-1 ps-1'>
                            <div className='image-container'>
                                <Image src={img3} className='roundedCircle' />
                                <p className='advantages-text3'>Engagement</p>
                            </div>
                        </div>
                            <div className='vertical-line '></div>
                             <div className='num-container pt-1'>
                               
                                <p className='advantages-text4'>03</p>
                            </div>
                            
                            </Col>
                        <Col md={1} className='mx-4'> <div className='image-container1 pt-1 ps-1'>
                            <div className='image-container'>
                                <Image src={img4} className='roundedCircle' />
                                <p className='advantages-text3'>Enrichissement</p>
                            </div>
                        </div>
                            <div className='vertical-line '></div>
                             <div className='num-container pt-1'>
                               
                                <p className='advantages-text4'>04</p>
                            </div>
                            
                            </Col>

                        <Col md={1} className='mx-4'>  <div className='image-container1 pt-1 ps-1'>
                            <div className='image-container'>
                                <Image src={img5} className='roundedCircle' />
                                <p className='advantages-text3'>Qualification</p>
                            </div>
                        </div>                        <div className='vertical-line '></div>
                         <div className='num-container pt-1'>
                               
                                <p className='advantages-text4'>05</p>
                            </div>
                        
                        </Col>

                        <Col md={1} className='mx-4'>  <div className='image-container1 pt-1 ps-1'>
                            <div className='image-container'>
                                <Image src={img6} className='roundedCircle' />
                                <p className='advantages-text3'>Communication</p>
                            </div>
                        </div>                        <div className='vertical-line '></div>
                         <div className='num-container pt-1'>
                               
                                <p className='advantages-text4'>06</p>
                            </div>
                        
                        </Col>

                        <Col md={1} className='mx-4'>  <div className='image-container1 pt-1 ps-1'>
                            <div className='image-container'>
                                <Image src={img7} className='roundedCircle' />
                                <p className='advantages-text3'>Roi</p>
                            </div>
                        </div>                        <div className='vertical-line '></div>
                         <div className='num-container pt-1'>
                               
                                <p className='advantages-text4'>07</p>
                            </div>
                        
                        </Col>
                        <hr className='Advantages-bottom w-100'></hr>
                    </Row>

                </div>
            </div>

        </>
    );

}
export default Advantages;