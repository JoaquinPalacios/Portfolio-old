import { Col, Container, Row } from "react-bootstrap";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact, FaWix, FaWordpress } from 'react-icons/fa';
import { SiFirebase, SiJavascript, SiMaterialUi, SiNextDotJs, SiPhp, SiRedux, SiTypescript } from "react-icons/si";

import { DiSqllite } from "react-icons/di";
import { InView } from "react-intersection-observer";
import styles from '../Skills/skills.module.css'
import { useState } from "react";

interface SkillsComponentProps {
  
}

const SkillsComponent: React.FC<SkillsComponentProps> = () => {    

    const [inView, setInView] = useState<boolean>(false);

    return (
        <Container id='Skills' className='my-5 sectionPadding' fluid>
            <h2 className='text-center mt-5 mb-3'>Skills</h2>
            <h4 className='text-center'>Programing languages and frameworks</h4>
            <Row className='d-flex justify-content-center'>
                <Col md={8}>
                    <div className={styles.titles}>
                        <div>Beginner</div>
                        <div>Average</div>
                        <div>I got it</div>
                        <div>Rockstar</div>
                    </div>
                    <div className={`boxShadow ${styles.bg}`}>
                        <InView onChange={setInView} triggerOnce>
                        {({ ref, inView }) => (
                        <div className={styles.skillContainer} ref={ref}>
                            {inView ? (<div><div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel95}`}><FaHtml5 size='1.5em' className='me-1' /> HTML</div>
                            <div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel90}`}><FaCss3Alt size='1.5em' className='me-1' /> CSS</div>
                            <div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel35}`}><SiPhp size='1.5em' className='me-1' /> PHP</div>
                            <div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel75}`}><SiJavascript size='1.5em' className='me-1' /> JavaScript</div>
                            <div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel65}`}><SiTypescript size='1.5em' className='me-1' /> Typescript</div>
                            <div className={`${styles.skill} ${styles.skillLevel70}`}><FaReact size='1.5em' className='me-1' /> React.Js</div>
                            <div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel65}`}><FaReact size='1.5em' className='me-1' /> React Native</div>
                            <div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel60}`}><SiRedux size='1.5em' className='me-1' /> Redux</div>
                            <div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel70}`}><SiNextDotJs size='1.5em' className='me-1' /> Next.Js</div></div>) : ''}                            
                        </div>
                        )}
                        </InView>
                    </div>      
                </Col>                
            </Row>             
            <h4 className='text-center'>CSS frameworks</h4>  
            <Row className='d-flex justify-content-center'>
                <Col md={8}>
                    <div className={styles.titles}>
                        <div>Beginner</div>
                        <div>Average</div>
                        <div>I got it</div>
                        <div>Rockstar</div>
                    </div>
                    <div className={`boxShadow ${styles.bg}`}>
                        <InView onChange={setInView} triggerOnce>
                        {({ ref, inView }) => (
                        <div className={styles.skillContainer}  ref={ref}>
                            {console.log('inview', inView)}
                            {inView ? (<div><div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel90}`}><FaBootstrap size='1.5em' className='me-1' /> Bootstrap</div>
                            <div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel65}`}><SiMaterialUi size='1.5em' className='me-1' /> MAterial UI</div></div>) : ''}                            
                        </div>
                        )}
                        </InView>
                    </div>      
                </Col>
            </Row>
            <h4 className='text-center'>Customer Management System</h4>  
            <Row className='d-flex justify-content-center'>
                <Col md={8}>
                    <div className={styles.titles}>
                        <div>Beginner</div>
                        <div>Average</div>
                        <div>I got it</div>
                        <div>Rockstar</div>
                    </div>
                    <div className={`boxShadow ${styles.bg}`}>
                        <InView onChange={setInView} triggerOnce>
                        {({ ref, inView }) => (
                        <div className={styles.skillContainer}  ref={ref}>
                            {console.log('inview', inView)}
                            {inView ? (<div><div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel80}`}><FaWordpress size='1.5em' className='me-1' /> WordPress</div>
                            <div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel60}`}><FaWix size='1.5em' className='me-1' /> WIX</div></div>) : ''}                            
                        </div>
                        )}
                        </InView>
                    </div>      
                </Col>
            </Row>
            <h4 className='text-center'>Data Base</h4>  
            <Row className='d-flex justify-content-center'>
                <Col md={8}>
                    <div className={styles.titles}>
                        <div>Beginner</div>
                        <div>Average</div>
                        <div>I got it</div>
                        <div>Rockstar</div>
                    </div>
                    <div className={`boxShadow ${styles.bg}`}>
                        <InView onChange={setInView} triggerOnce>
                        {({ ref, inView }) => (
                        <div className={styles.skillContainer}  ref={ref}>
                            {console.log('inview', inView)}
                            {inView ? (<div><div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel75}`}><SiFirebase size='1.5em' className='me-1' /> Firebase</div>
                            <div className={`d-flex flex-row align-items-center ${styles.skill} ${styles.skillLevel50}`}><DiSqllite size='1.5em' className='me-1' /> SQLite</div></div>) : ''}                            
                        </div>
                        )}
                        </InView>
                    </div>      
                </Col>
            </Row>                                    
        </Container>
    );
}
 
export default SkillsComponent;