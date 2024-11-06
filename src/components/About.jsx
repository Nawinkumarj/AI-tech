import {Container,  Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faNewspaper,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
const About = () => {
  return (
    <Container id='about' className='Aboutus'>
        <Row>
            <Col xs={12} md={12} lg={12}>
            <h1 className='about-us-title title'>about us</h1>
            {/* <h1 className='about-txt-bg'>about \us</h1> */}
            </Col>
            <Col xs={12} lg={12} className='about-contents'>
                <Row>
                    <Col lg={4} className='about-content'>
                      <FontAwesomeIcon icon={faNewspaper} className='about-icon' />
                      <h2>Who We are</h2>
                      <p>We are a fully integrated AI solutions provider, specializing in developing intelligent systems for healthcare, finance, education, and other industries. Our expertise spans multiple AI-driven platforms, including machine learning, natural language processing, and automation technologies.</p>
                    </Col>
                    <Col lg={4} className='about-content'>
                      <FontAwesomeIcon icon={faCoffee} className='about-icon' />
                      <h2>Our Commitment</h2>
                      <p>We believe in the transformative power of AI to drive innovation and inspire change. Committed to delivering advanced AI solutions, we bring intelligent systems to life, ensuring they adapt to diverse industries and meet the unique needs of our clients.</p>
                    </Col>
                    <Col lg={4} className='about-content'>
                      <FontAwesomeIcon icon={faCoffee} className='about-icon' />
                      <h2>Our Vision</h2>
                      <p>Our vision is to become a leading AI solutions provider by consistently setting new benchmarks in the technology industry. With vast AI and machine learning expertise, we transform our clients ideas into innovative, intelligent systems that drive impactful results.</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default About
