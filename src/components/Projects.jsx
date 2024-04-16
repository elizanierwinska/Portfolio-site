import './Projects.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { JavascriptOriginal } from 'devicons-react';
import { Html5Original } from 'devicons-react';
import { Css3Original } from 'devicons-react';
import { ThreejsOriginal } from 'devicons-react';
import { BlenderOriginal } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';


function Projects() {
  const javaScriptEl = useRef(null);
  const threeJsEl = useRef(null);

  useEffect(() => {
    const typedJavaScriptEl = new Typed(javaScriptEl.current, {
      strings: [
      'Made with JavaScript:',
    ],
      typeSpeed: 100,
      showCursor: false,
    });

    const typedThreeJsEl = new Typed(threeJsEl.current, {
      strings: [
      'Made with Three.js library:',
    ],
      typeSpeed: 100,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typedJavaScriptEl.destroy();
      typedThreeJsEl.destroy();
    };
  }, []);

  return (<div className="projects">
    <div className="back-button-container">
      <Link id="back-button" to="/">
        <p id="arrow">&#8592;</p>
        <p>back</p>
      </Link>
    </div>
    <div className="project-container">
      <span ref={javaScriptEl}/>
      <div className="project-description">
        <Link to={"https://calculator-en.vercel.app/"}>
          <img src="../images/calculator.png" alt="Calculator"/>
        </Link>
        <div className="description">
          <h3>Calculator</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <JavascriptOriginal />
            <Html5Original />
            <Css3Original />
          </div>
        </div>
      </div>
      <div className="project-description">
        <Link to={"https://to-do-list-en.vercel.app/"}>
          <img src="../images/to-do-list.png" alt="To-do list"/>
        </Link>
        <div className="description">
          <h3>To do list</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <JavascriptOriginal />
            <Html5Original />
            <Css3Original />
          </div>
        </div>
      </div>
      <div className="project-description">
        <Link to={"https://weather-app-en.vercel.app/"}>
          <img src="../images/weather-app.png" alt="Weather app"/>
        </Link>
        <div className="description">
          <h3>Weather app</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <JavascriptOriginal />
            <Html5Original />
            <Css3Original />
          </div>
        </div>
      </div>
      <span ref={threeJsEl}/>
      <div className="project-description">
        <Link to={"https://portfolio-three-js-dromuarga.vercel.app/"}>
          <img src="../images/3d-portfolio.png" alt="Portfolio site made with Three.js"/>
        </Link>
        <div className="description">
          <h3>Portfolio site</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <ThreejsOriginal />
            <ReactOriginal />
          </div>
        </div>
      </div>
      <div className="project-description">
        <Link to={"https://marble-race-game-en.vercel.app/"}>
          <img src="../images/marble-race.png" alt="Marble race game made with Three.js"/>
        </Link>
        <div className="description">
          <h3>Marble race game</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <ThreejsOriginal />
            <ReactOriginal />
          </div>
        </div>
      </div>
      <div className="project-description">
        <Link to={"https://portal-dromuarga.vercel.app/"}>
          <img src="../images/portal-scene.png" alt="Portal scene made with Three.js"/>
        </Link>
        <div className="description">
          <h3>Portal scene</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <ThreejsOriginal />
            <BlenderOriginal />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>)
}

export default Projects;