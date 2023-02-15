import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaReact, FaSass, FaWordpress } from 'react-icons/fa';
import { SiAdobe, SiExpo, SiFirebase, SiMaterialui, SiNextdotjs, SiPhp, SiRedux, SiTypescript } from "react-icons/si";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Contact from '../components/ContactUs';
import Container from 'react-bootstrap/Container';
import { DiJavascript1 } from "react-icons/di";
import Head from 'next/head'
import Image from 'next/image'
import Portfoliocomponent from '../components/Portfolio';
import Row from 'react-bootstrap/Row';
import SkillsComponent from '../components/Skills';
import TimelineComponent from '../components/Timeline';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div id='Home' className='pt-1'>
      <Head>
        <title>Joa Palacios | Portfolio</title>
        <meta name="description" content='Website Portfolio of Joa Palacios' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property="og:title" content='Joa Palacios Portfolio' />
        <meta property="og:description" content='Personal website porfolio of Joa Palacios' />
        <meta property="og:image" content="/images/profile.png" />
        <meta property="og:image:secure_url" content="/images/profile.png" /> 
        <meta property="og:image:type" content="image/png" /> 
        <meta property="og:image:width" content="1200" /> 
        <meta property="og:image:height" content="627" />
        <meta property="og:image:alt" content="https://i.ibb.co/5Fch3r5/web-Porfolio.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-joaquinpalacios.vercel.app/" />
        <meta property="og:locale" content="en" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row className='my-5 pt-4'>
          <Col sm={12} lg={8} xl={8}>
              <div className={styles.wrapper}>
                <h1 className={`text-center ${styles.glitch}`}>Joa Palacios</h1>
              </div>        
              <h2 className='text-center'>Front End Developer</h2>
              <h5 className='text-center'>Gold Coast, Australia</h5>
              <p className='mt-5 mt-sm-3 mx-lg-5'>Diligent Front End Developer with 2+ years experience in commercial application development. Eager to keep learning the latest technologies and to build innovative and cutting edge business solutions for clients around the globe.</p>
              <Row className=' mt-5 mt-md-3 pt-lg-5 mx-lg-0 d-flex justify-content-between'>
                <Col className='d-flex justify-content-between' lg={6}>
                  <FaHtml5 size='2em' className={styles.iconsHtml} />
                  <FaCss3Alt size='2em' className={styles.iconsCss} />
                  <FaWordpress size='2em' className={styles.iconsWp} />
                  <FaBootstrap size='2em' className={styles.iconsBoots} />
                  <SiMaterialui size='2em' className={styles.iconsMui} />
                  <FaSass size='2em' className={styles.iconsSass} />
                  <SiPhp size='2em' className={styles.iconPhp} />
                  <DiJavascript1 size='2em' className={styles.iconsJs} />
                </Col>
                <Col className='d-flex justify-content-between' lg={6}>
                  <SiTypescript size='2em' className={styles.iconsTs} />
                  <FaReact size='2em' className={styles.iconsReact} />
                  <SiRedux size='2em' className={styles.iconsRedux} />
                  <SiNextdotjs size='2em' className={styles.iconsNext} />
                  <SiExpo size='2em' className={styles.iconExpo} />
                  <SiFirebase size='2em' className={styles.iconsFb} />
                  <FaGithub size='2em' className={styles.iconsNext} />
                  <SiAdobe size='2em' className={styles.iconsAdobe} />
                </Col>                
              </Row>
          </Col> 
          <Col sm={8} lg={4} xl={3} className={`mx-auto ${styles.profileImg}`} >
              <Image src='/images/profile.png' width='500px' height='625px' alt='Profile' />
          </Col>
        </Row>
        {/* <Row className='d-flex justify-content-center text-center text-lg-start'>
            <Col xs={{ span: 6, offset: 1 }} sm={{ span: 4, offset: 0 }} lg={{ span: 5, offset: 0 }}>
              <a href='/file/JoaPalacios-Resume.pdf' download>
                <Button type='submit' className='greenButton'>Download resume</Button>
              </a>
            </Col>
        </Row> */}
        <Portfoliocomponent />
        <TimelineComponent />
        <SkillsComponent />
        <Contact />
      </Container>         
    </div>
  );
}