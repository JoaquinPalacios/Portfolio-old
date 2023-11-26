import ArrayPortfolio from "../../data";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaGithub } from "react-icons/fa"
import Image from 'next/image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';

const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Take a look!
    </Tooltip>
  );

export interface PortfoliocomponentProps {
   
}
 
const Portfoliocomponent: React.FC<PortfoliocomponentProps> =() => {
    return (
        <>
            <h2 id='Porfolio' className='titleMargin sectionPadding mb-4 d-flex justify-content-center'>Portfolio</h2>                       
            <h4 className='text-center mb-5'>Here are a few projects I&#39;ve worked on recently. Want to see more? <a href="mailto:joa_palacios@hotmail.com" className='green'>Email me.</a></h4>
            <Container>
            {ArrayPortfolio.map((portfolio) => (<Card className='bgCard py-2 border border-dark my-3' key={portfolio.id}>
                    <Row className='d-flex align-items-center'>
                        <Col lg={3} className='text-center'>
                            <Card.Title>{portfolio.title}</Card.Title>
                            <Card.Body>{portfolio.description}</Card.Body>
                            <div className='d-flex justify-content-evenly align-items-center mb-2 mb-lg-0'>
                                    <Button href={portfolio.URLsite} className='my-2 greenButton' type='submit' target='_blank'>Visit Website &rang;</Button>
                                {(portfolio.URLGitHub !== null) ? (<OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}>
                                        <a href={portfolio.URLGitHub} target='_blank' rel='noreferrer'>
                                            <FaGithub size='2em' color='#fff' />
                                        </a>
                                    </OverlayTrigger>) : null}                                                              
                            </div>                            
                        </Col>
                        <Col lg={6} className='imgCard' >
                            <Image src={portfolio.pageImage} width='800px' height='380px' alt={portfolio.alt} />   
                        </Col>
                        <Col lg={3} className=''>
                            <Card.Title className='mb-2 mt-2 mt-lg-0 text-center'>Technologies</Card.Title>                       
                            {portfolio.tools.map((tool) => (<Badge className='text-start ms-4 bg-light text-dark p-1 m-2 d-flex justify-content-evenly shadow-lg' key={''}>{tool}</Badge>))}                 
                        </Col>                 
                    </Row>
                </Card>))}
            </Container>
        </>
    );
}
 
export default Portfoliocomponent