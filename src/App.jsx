import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <h1 id="name">Eliza Nierwińska</h1>
        <p id="title">Junior Frontend Developer</p>
        <div className="links">
          <div className="link">
            <hr className="hr-right"/>
              <Link className="a" to="/projects">Projects</Link>
            <hr className="hr-left"/>
          </div>
          <div className="link">
            <hr className="hr-right"/>
              <Link className="a" to="/resume">Resume</Link>
            <hr className="hr-left"/>
          </div>
          <div className="link">
            <hr className="hr-right"/>
              <Link className="a" to="contact">Contact</Link>
            <hr className="hr-left"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
