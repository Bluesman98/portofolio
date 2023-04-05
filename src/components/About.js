function About(props) {
  return (
    <div className="About">
      <h1>About</h1>
      <div>
        <p>
          I always had passion with programming and finally i decided to start
          my career by following along with the Odin Project full stack
          javascript curriculum.
          <br /> <br />
          I'm eager to put my skills to work and also expand them and add new
          tools to my skill set !
        </p>
        <div className="skills">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="column">
              <div>
                <i className="devicon-html5-plain colored"></i>
                <h2>html</h2>
              </div>
              <div>
                <i className="devicon-css3-plain colored"></i>
                <h2>css</h2>
              </div>
              <div>
                <i className="devicon-javascript-plain colored"></i>
                <h2>javascript</h2>
              </div>
              <div>
                <i className="devicon-nodejs-plain colored"></i>
                <h2>nodejs</h2>
              </div>
            </div>
            <div className="column">
              <div>
                <i className="devicon-mongodb-plain colored"></i>
                <h2>mongoDB</h2>
              </div>
              <div>
                <i className="devicon-firebase-plain colored"></i>
                <h2>firebase</h2>
              </div>
              <div>
                <i className="devicon-react-original colored"></i>
                <h2>react</h2>
              </div>
              <div>
                <i className="devicon-express-original "></i>
                <h2>express</h2>
              </div>
            </div>
            <div className="column">
              <div>
                <i className="devicon-npm-original-wordmark colored"></i>
                <h2>npm</h2>
              </div>
              <div>
                <i className="devicon-webpack-plain colored"></i>
                <h2>webpack</h2>
              </div>
              <div>
                <i className="devicon-git-plain colored"></i>
                <h2>git</h2>
              </div>
              <div>
                <i className="devicon-socketio-original colored"></i>
                <h2>Scoket.IO</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
