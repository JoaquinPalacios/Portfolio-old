import { Col, Container, Row } from 'react-bootstrap';
import { FaAdobe, FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaReact, FaSass, FaWordpress } from 'react-icons/fa';
import { SiFirebase, SiMaterialUi, SiNextDotJs, SiTypescript } from "react-icons/si";

import { DiJavascript1 } from "react-icons/di";
import Head from 'next/head'
import Image from 'next/image'
import Portfoliocomponent from '../components/Portfolio';
import TimelineComponent from '../components/Timeline';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joa Palacios | Portfolio</title>
        <meta name="viewport" content='initial-scale=1.0, width=device-width' />
      </Head>
      <Container fluid>
        <Row className='my-5'>
          <Col sm={12} md={7} lg={8} xl={8}>
              <div className={styles.wrapper}>
                <h1 className={`text-center ${styles.glitch}`}>Joa Palacios</h1>
              </div>        
              <h2 className='d-flex justify-content-center'>Front End Developer</h2>
              <h5 className='d-flex justify-content-center'>Gold Coast, Australia</h5>
              <p className='mt-5 mx-lg-5'>Diligent Front End Developer with 2+ years experience in commercial application development. Eager to keep learning the latest technologies and to build innovative and cutting edge business solutions for clients around the globe.</p>
              <Row className='mt-md-5 mx-lg-0 d-flex justify-content-between'>
                <Col className='d-flex justify-content-between' lg={6}>
                  <FaHtml5 size='2em' className={styles.iconsHtml} />
                  <FaCss3Alt size='2em' className={styles.iconsCss} />
                  <FaWordpress size='2em' className={styles.iconsWp} />
                  <FaBootstrap size='2em' className={styles.iconsBoots} />
                  <SiMaterialUi size='2em' className={styles.iconsMui} />
                  <FaSass size='2em' className={styles.iconsSass} />
                </Col>
                <Col className='d-flex justify-content-between' lg={6}>
                  <DiJavascript1 size='2em' className={styles.iconsJs} />
                  <SiTypescript size='2em' className={styles.iconsTs} />
                  <FaReact size='2em' className={styles.iconsReact} />
                  <SiNextDotJs size='2em' className={styles.iconsNext} />
                  <SiFirebase size='2em' className={styles.iconsFb} />
                  <FaGithub size='2em' className={styles.iconsNext} />
                  <FaAdobe size='2em' className={styles.iconsAdobe} />
                </Col>                
              </Row>
          </Col> 
          <Col sm={8} md={5} lg={4} xl={3} className={`mx-auto ${styles.profileImg}`} >
              <Image src='/images/profile.png' width='500px' height='625px' alt='Profile' />
          </Col>
        </Row>
        <Portfoliocomponent />
        <TimelineComponent />
      </Container>         
    </div>
  );
}
