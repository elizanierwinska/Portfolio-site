import './Resume.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Resume() {
  return (
    <div className="resume-container">
      <div className="back-button-container">
        <Link id="back-button" to="/">
          <p id="arrow">&#8592;</p>
          <p>back</p>
        </Link>
      </div>
      <div className="resume">
        <div>
          <h1>Summary</h1>
          <hr/>
        </div>
        <p>As a self-taught frontend developer, I have passion for creating visually appealing and user-friendly web applications. With a strong grasp of HTML, CSS, JavaScript, and React, I am adept at translating design concepts into responsive web interfaces. I want to contribute to the success of a forward-thinking company and team with a problem-solving attitude so as to further develop my skills and expertise.</p>
        <div>
          <h1>Skills</h1>
          <hr />
        </div>
        <div>
          <h1>Education</h1>
          <hr />
        </div>
        <div>
          <h1>Professional Experience</h1>
          <hr />
        </div>
        <div>
          <h1>Languages</h1>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Resume;