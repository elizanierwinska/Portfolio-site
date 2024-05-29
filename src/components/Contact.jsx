import './Contact.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Contact() {
  return (<div id="contact">
    <div className="back-button-container">
      <Link id="back-button" to="/">
        <p id="arrow">&#8592;</p>
        <p>back</p>
      </Link>
    </div>
    <div className="contact-container">
      <p id="title">You can check my channels below:</p>
      <div className="contact-info">
        <Link to="https://www.linkedin.com/in/eliza-nierwi%C5%84ska-583385278/" target="_blank" >
          <img src="../images/linkedin_logo_icon.png" alt=""/>
        </Link>
        <Link to="https://github.com/elizanierwinska" target="_blank" >
          <img src="../images/github_logo.png" alt=""/>
        </Link>
        <Link to="https://tech-blog-dromuarga.vercel.app/" target="_blank" >
          <img src="../images/blog-icon.png" alt=""/>
        </Link>
        <Link to="mailto:nierwinskaeliza@gmail.com" target="_blank">
          <img src="../images/email-icon.png" alt=""/>
        </Link>
      </div>
    </div>
    <Footer/>
  </div>)
}

export default Contact;