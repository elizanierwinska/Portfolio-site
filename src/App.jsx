import './App.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function App() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
      'Frontend developer',
      'Tech enthusiast',
      'Learner'
    ],
      typeSpeed: 100,
      loop: true,
      showCursor: false,
      cursorChar: '|'
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  
  return (
    <div className="App">
      <div>
        <h1 id="name">Eliza Nierwińska</h1>
        <span id="title" ref={el}/>
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
