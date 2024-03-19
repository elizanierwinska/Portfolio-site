import './Projects.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Projects() {
  return (<div className="projects">
    <div className="back-button-container">
      <Link id="back-button" to="/">
        <p id="arrow">&#8592;</p>
        <p>back</p>
      </Link>
    </div>
    <div className="project-container">
      <div className="project-description">
        <Link to={"https://portfolio-three-js-dromuarga.vercel.app/"}>
          <img src="../images/3d-portfolio.png" alt="Portfolio site made with Three.js"/>
        </Link>
        <div className="description">
          <h3>Portfolio site</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <p>Three.js</p>
            <p>React Three Fiber</p>
          </div>
        </div>
      </div>
      <div className="project-description">
        <Link to={"https://calculator-en.vercel.app/"}>
          <img src="../images/calculator.png" alt="Calculator"/>
        </Link>
        <div className="description">
          <h3>Calculator</h3>
          <h4>Made with:</h4>
          <div className="tags">
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
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
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
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
            <p>Three.js</p>
            <p>React Three Fiber</p>
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
            <p>Three.js</p>
            <p>Blender</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>)
}

export default Projects;