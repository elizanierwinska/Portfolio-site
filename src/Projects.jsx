import './Projects.css';

function Projects() {
  return (<div className="projects">
    <div className="project-description">
      <img src="../images/3d-portfolio.png" alt="Portfolio site made with Three.js"/>
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
      <img src="../images/marble-race.png" alt="Marble race game made with Three.js"/>
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
      <img src="../images/portal-scene.png" alt="Portal scene made with Three.js"/>
      <div className="description">
        <h3>Portal scene</h3>
        <h4>Made with:</h4>
        <div className="tags">
          <p>Three.js</p>
          <p>Blender</p>
        </div>
      </div>
    </div>
    <div className="project-description">
      <img src="../images/calculator.png" alt="Calculator"/>
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
      <img src="../images/to-do-list.png" alt="To-do list"/>
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
  </div>)
}

export default Projects;