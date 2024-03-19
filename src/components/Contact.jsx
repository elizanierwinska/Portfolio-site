import './Contact.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Contact() {
  return (<div id="contact">
    <div>
      <Link id="back-button" to="/">
        <p id="arrow">&#8592;</p>
        <p>back</p>
      </Link>
    </div>
    <p id="title">You can check my channels below:</p>
    <Link to="https://www.linkedin.com/in/eliza-nierwi%C5%84ska-583385278/">
      <img src="../images/linkedin_logo_icon.png" alt=""/>
    </Link>
    <Link>
      <img src="../images/github_logo.png" alt=""/>
    </Link>
    <Link>
      <img src="../images/blog-icon.png" alt=""/>
    </Link>
    <Link>
      <img src="../images/email-icon.png" alt=""/>
    </Link>
    <Footer/>
  </div>)
}

export default Contact;