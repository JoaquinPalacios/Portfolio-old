import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap"

import { FaGithub } from "react-icons/fa"
import Image from 'next/image'
import { firestore } from "../firebase/firebaseFile";
import { useEffect } from "react";

export interface PortfoliocomponentProps {
   
}
 
const Portfoliocomponent: React.FC<PortfoliocomponentProps> =() => {
    useEffect(() => {
        const db = firestore;
        console.log('db primer', db);
        db.collection('Projects').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log('segundo')
                console.log(doc.id, ' => ', doc.data());
            });
        });
      }, []);
    return (
        <>
            <h2 className='titleMargin mb-4 d-flex justify-content-center'>Portfolio</h2>                       
            <h4 className='text-center mb-5'>Here are a few projects I&#39;ve worked on recently. Want to see more? <a href="mailto:joa_palacios@hotmail.com">Email me.</a></h4>
            <Container>
                <Card className='bgCard py-2 border border-dark'>
                    <Row className='d-flex align-items-center'>
                        <Col lg={3} className='text-center'>
                            <Card.Title>TiziFlet Website</Card.Title>
                            <Card.Body>Web Design and Development of TiziFlet Removalist website, as well as the implementation of SEO tactics.</Card.Body>
                            <div className='d-flex justify-content-evenly align-items-center'>
                                <Button variant="outline-primary" href="https://www.tiziflet.com.ar/" target='_blank' className='shadow-lg my-2'>Visit Website &rang;</Button>
                                <a href='https://github.com/JoaquinPalacios/TiziFlet' target='_blank' rel='noreferrer'><FaGithub size='2em' color='#fff' /></a>
                            </div>
                            
                        </Col>
                        <Col lg={6} className='imgCard' >
                            <Image src='/images/TiziFlet.png' width='800px' height='380px' alt='TiziFlet Website' />   
                        </Col>
                        <Col lg={3} className=''>
                            <Card.Title className='mb-2 text-center'>Technologies</Card.Title>                        
                            <Badge className='text-start ms-4 bg-light text-dark p-1 m-2 d-flex justify-content-evenly shadow-lg'>JavaScript</Badge>
                            <Badge className='text-start ms-4 bg-light text-dark p-1 m-2 d-flex justify-content-evenly shadow-lg'>React.Js</Badge>
                            <Badge className='text-start ms-4 bg-light text-dark p-1 m-2 d-flex justify-content-evenly shadow-lg'>Next.Js</Badge>
                            <Badge className='text-start ms-4 bg-light text-dark p-1 m-2 d-flex justify-content-evenly shadow-lg'>Bootstrap</Badge>
                            <Badge className='text-start ms-4 bg-light text-dark p-1 m-2 d-flex justify-content-evenly shadow-lg'>React Icons</Badge>
                            <Badge className='text-start ms-4 bg-light text-dark p-1 m-2 d-flex justify-content-evenly shadow-lg'>EmailJS</Badge>                       
                        </Col>                 
                    </Row>
                </Card>
            </Container>
        </>
    );
}
 
export default Portfoliocomponent