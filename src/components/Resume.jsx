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
        <div className="resume-header">
          <h1>Summary</h1>
          <hr/>
        </div>
        <p>As a self-taught frontend developer, I am passionate about creating visually appealing and user-friendly web applications. With a strong grasp of HTML, CSS, JavaScript, and React, I am adept at translating design concepts into responsive web interfaces. I want to contribute to the success of a forward-thinking company and team with a problem-solving attitude so as to further develop my skills and expertise.</p>
        <div className="resume-header">
          <h1>Skills</h1>
          <hr />
        </div>
          <p><b className="bold-p">Programming languages:</b> JavaScript, TypeScript, Python, HTML, CSS</p>
          <p><b className="bold-p">Frameworks/Libraries:</b> React, Three.js, Next.js, Redux, Tailwind, Bulma</p>
          <p><b className="bold-p">Tools:</b> Git, Command Line, Microsoft Office</p>
        <div className="resume-header">
          <h1>Education</h1>
          <hr />
        </div>
        <div className="education-and-experience">
          <h2><b>University of Warmia and Mazury</b> / B.A. Linguistics in Business</h2>
          <p className="gpa"><b>GPA: </b>4.5/5.0; <b>Thesis: </b>5.0/5.0</p>
          <p className="date">October 2020 - June 2023, Olsztyn</p>
          <ul>
            <li>Academic focus: English, German, Economics, IT, and Accounting</li>
            <li>Professional programs with Citibank Olsztyn, Transcom Worldwide Poland
            in Poznań, and Poznań International Fair</li>
          </ul>
          <h2><b>Zespół Szkół Weterynaryjnych i Ogólnokształcących nr 7 w Łomży</b></h2>
          <h3>Technical College / Landscape Architecture</h3>
          <p className="date">September 2016 - May 2020</p>
          <ul>
            <li>User-centric design, spatial awareness, research skills, client interaction</li>
          </ul>
        </div>
        <div className="resume-header">
          <h1>Professional Experience</h1>
          <hr />
        </div>
        <div className="education-and-experience">
          <h2><b>Biotikur</b> / Business Analytics and Marketing Intern</h2>
          <p className="company-description"><i>Biotikur is an applied microbiome research UG based in Berlin, Germany</i></p>
          <p className="date">July 2022 - August 2022, Berlin</p>
          <ul>
            <li>Research and identify influential social media influencers for collaboration</li>
            <li>Examine competitive landscape to create new social media strategies</li>
            <li>Analyze sales website performance (SEO, ad conversion) and tweak CSS/HTML design</li>
          </ul>
        </div>
        <div className="resume-header">
          <h1>Languages</h1>
          <hr />
        </div>
        <p>English (fluent), Polish (fluent), German (B1)</p>
      </div>
      <Footer />
    </div>
  )
}

export default Resume;