import { Container } from 'react-bootstrap'
import footerimg from '../assets/Footer.png'
import Contact from './Contact'
import { Link } from 'react-router-dom';
// import letsimg from '../assets/letstalk.png'
const Letstalk = () => {
  return (
    <div className="container-fluid">
        <Container className='Lets-footer' fluid>
            
                <Link to="/Contact"> <div className="lets-talk-container"></div></Link>
            <div className="Footer">
                <div className="footer-img">
                    <img src={footerimg} alt="" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Letstalk
