import './Projects.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { JavascriptOriginal } from 'devicons-react';
import { TypescriptOriginal } from 'devicons-react';
import { Html5Original } from 'devicons-react';
import { Css3Original } from 'devicons-react';
import { ThreejsOriginal } from 'devicons-react';
import { BlenderOriginal } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';

function Projects() {
  const javaScriptEl = useRef(null);
  const threeJsEl = useRef(null);
  const typeScriptEl = useRef(null);

  // const [show, setShow] = useState(false);

  useEffect(() => {
    const typedJavaScriptEl = new Typed(javaScriptEl.current, {
      strings: [
      'JavaScript projects:',
    ],
      typeSpeed: 100,
      showCursor: false,
    });

    const typedTypescriptJsEl = new Typed(typeScriptEl.current, {
      strings: [
      'TypeScript projects:',
    ],
      typeSpeed: 100,
      showCursor: false,
    });

    const typedThreeJsEl = new Typed(threeJsEl.current, {
      strings: [
      'Three.js projects:',
    ],
      typeSpeed: 100,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typedJavaScriptEl.destroy();
      typedTypescriptJsEl.destroy();
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
        <Link to="https://calculator-en.vercel.app/" target="_blank" >
          <img src="../images/calculator.png" alt="Calculator"/>
        </Link>
        <div className="description">
          <h3>Calculator</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <Link to="https://www.javascript.com/" target="_blank" >
              <JavascriptOriginal size="40"/>
            </Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" >
              <Html5Original size="40"/>
            </Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" >
              <Css3Original size="40"/>
            </Link>
          </div>
          <h4 className="h4-github">Github repository:</h4>
          <Link to="https://github.com/elizanierwinska/Calculator" target="_blank" >
            <img src="../images/github_logo.png" alt="" id="github"/>
          </Link>
          {/* <h4 className="info-about-project" onClick={() =>setShow(!show)}>About the project</h4>
          <div className={`notShown ${show ? 'show' : ''}`}>
            <h1 className="close-btn" onClick={() => setShow(false)}>&#10005;</h1>
            <div className="project-information">
              <h1>Calculator</h1>
              <h3>Motivation</h3>
              <h3>Challanges</h3>
              <h3>What have I learned</h3>
            </div>
          </div> */}
        </div>
      </div>
      <div className="project-description">
        <Link to="https://to-do-list-en.vercel.app/" target="_blank" >
          <img src="../images/to-do-list.png" alt="To-do list"/>
        </Link>
        <div className="description">
          <h3>To do list</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <Link to="https://www.javascript.com/" target="_blank" >
              <JavascriptOriginal size="40"/>
            </Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" >
              <Html5Original size="40"/>
            </Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" >
              <Css3Original size="40"/>
            </Link>
          </div>
          <h4 className="h4-github">Github repository:</h4>
          <Link to="https://github.com/elizanierwinska/To-do-list" target="_blank" >
            <img src="../images/github_logo.png" alt="" id="github"/>
          </Link>
        </div>
      </div>
      <div className="project-description end">
        <Link to="https://weather-app-en.vercel.app/" target="_blank" >
          <img src="../images/weather-app.png" alt="Weather app"/>
        </Link>
        <div className="description">
          <h3>Weather app</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <Link to="https://www.javascript.com/" target="_blank" >
              <JavascriptOriginal size="40"/>
            </Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" >
              <Html5Original size="40"/>
            </Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" >
              <Css3Original size="40"/>
            </Link>
          </div>
          <h4 className="h4-github">Github repository:</h4>
          <Link to="https://github.com/elizanierwinska/Weather-app" target="_blank" >
            <img src="../images/github_logo.png" alt="" id="github"/>
          </Link>
        </div>
      </div>
      <span ref={typeScriptEl}/>
      <div className="project-description end">
        <Link to="https://wolt-delivery-calculator-dromuargas-projects.vercel.app/" target="_blank" >
          <img src="../images/Wolt-delivery-calculator.png" alt="Wolt delivery calculator app"/>
        </Link>
        <div className="description">
          <h3>Delivery fee calculator</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <Link to="https://www.typescriptlang.org/" target="_blank" >
              <TypescriptOriginal size="40"/>
            </Link>
            <Link to="https://react.dev/" target="_blank" >
              <ReactOriginal size="40"/>
            </Link>
            <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" >
              <Css3Original size="40"/>
            </Link>
          </div>
          <h4 className="h4-github">Github repository:</h4>
          <Link to="https://github.com/elizanierwinska/Wolt-delivery-calculator" target="_blank" >
            <img src="../images/github_logo.png" alt="" id="github"/>
          </Link>
        </div>
      </div>
      <span ref={threeJsEl}/>
      <div className="project-description">
        <Link to="https://portfolio-three-js-dromuarga.vercel.app/" target="_blank" >
          <img src="../images/3d-portfolio.png" alt="Portfolio site made with Three.js"/>
        </Link>
        <div className="description">
          <h3>Portfolio site</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <Link to="https://threejs.org/" target="_blank" >
              <ThreejsOriginal size="40"/>
            </Link>
            <Link to="https://github.com/pmndrs/react-three-fiber" target="_blank" >
              <ReactOriginal size="40"/>
            </Link>
          </div>
          <h4 className="h4-github">Github repository:</h4>
          <Link to="https://github.com/elizanierwinska/Portfolio-site-Three.js" target="_blank" >
            <img src="../images/github_logo.png" alt="" id="github"/>
          </Link>
        </div>
      </div>
      <div className="project-description">
        <Link to="https://marble-race-game-en.vercel.app/" target="_blank" >
          <img src="../images/marble-race.png" alt="Marble race game made with Three.js"/>
        </Link>
        <div className="description">
          <h3>Marble race game</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <Link to="https://threejs.org/" target="_blank" >
              <ThreejsOriginal size="40"/>
            </Link>
            <Link to="https://github.com/pmndrs/react-three-fiber" target="_blank" >
              <ReactOriginal size="40"/>
            </Link>
          </div>
          <h4 className="h4-github">Github repository:</h4>
          <Link to="https://github.com/elizanierwinska/Marble-race-game" target="_blank" >
            <img src="../images/github_logo.png" alt="" id="github"/>
          </Link>
        </div>
      </div>
      <div className="project-description">
        <Link to="https://portal-dromuarga.vercel.app/" target="_blank" >
          <img src="../images/portal-scene.png" alt="Portal scene made with Three.js"/>
        </Link>
        <div className="description">
          <h3>Portal scene</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <Link to="https://threejs.org/" target="_blank" >
              <ThreejsOriginal size="40"/>
            </Link>
            <Link to="https://www.blender.org/" target="_blank" >
              <BlenderOriginal size="40"/>
            </Link>
          </div>
          <h4 className="h4-github">Github repository:</h4>
          <Link to="https://github.com/elizanierwinska/Portal-scene" target="_blank" >
            <img src="../images/github_logo.png" alt="" id="github"/>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>)
}

export default Projects;