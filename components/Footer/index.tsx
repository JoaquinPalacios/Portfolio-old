import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'
import Row from 'react-bootstrap/Row';

export interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className='bgCard'>
            <Container>
                <Row className='my-2 d-flex align-items-center'>                    
                    <Col xs={6} md={4} className='mx-auto'>
                        <div className='my-2 grey'>Email: <a href="mailto:joa_palacios@hotmail.com" className='green'>joa_palacios@hotmail.com</a></div>
                        <div className='grey'>Linkedin: <a href='https://www.linkedin.com/in/joapalacios/' target='_blank' rel="noreferrer" className='green'>joapalacios</a></div>
                        <div className='my-2 grey'>Github: <a href='https://github.com/JoaquinPalacios' target='_blank' rel='noreferrer' className='green'>JoaquinPalacios</a></div>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src='/images/logo.png' width='158px' height='158px' alt='Logo' />
                    </Col>
                </Row>
                <Row><small className='text-center grey fw-light'>Copyright {new Date().getFullYear()}</small></Row>
            </Container>            
        </footer>
    );
}
 
export default Footer;