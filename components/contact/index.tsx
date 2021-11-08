import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';

import emailjs from 'emailjs-com';

const Result = () => <h3 className='text-center my-4'>Thanks for your message. I will be in touch soon.</h3>;

const ContactUs = () => {
    const [result, setResult] = useState<boolean>(false);
    console.log('result created', result)
  
    const sendEmail = (e: any) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jpn9c3w', 'template_776tvij', e.target, 'user_hoTtSl92UpMWONbs4fzAz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setResult(true);      
    };
    setTimeout(() => {
        setResult(false);
    }, 5000);

  return (
            <Container id='Contact' className='mt-5 pt-5 sectionPadding'>
                <h2 className='text-center mt-3'>Get in touch!</h2>
                <Row className='d-flex justify-content-center'>
                    <Col sm={12} lg={8} className='gy-3'> 
                        <Form className='ms-lg-5 ms-md-2' data-toggle="validator" onSubmit={sendEmail}>
                            <Form.Group>
                                <Form.Control required type="text" placeholder="Name" name='name' className='mb-3' />                                 
                                <Row><Col lg={6}><Form.Control required type="email" placeholder="Email" name='email' className='mb-3' /></Col>
                                <Col lg={6}><Form.Control type="tel" placeholder="Phone" name='tel' className='mb-3' /></Col></Row>                                                                      
                                <Form.Control required as="textarea" rows={4}  placeholder="Message" name='message' className='mb-3' />
                            </Form.Group>
                            <div className='d-grid gap-2 d-lg-block'>
                                <Button type="submit" className='col-12 greenButton' size='lg'>Enviar</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                {result ? (<Row><Result /></Row>) : null}
            </Container>
  );
};
export default ContactUs;