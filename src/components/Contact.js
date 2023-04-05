function Contact(props) {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <div>
        <div className="details">
          <h2>
            Please get in touch if you think our work could be mutually
            beneficial !
          </h2>
          <div className="links">
            <h2
              className="email"
              onClick={() => {
                navigator.clipboard.writeText("papaderos1998@gmail.com");
              }}
            >
              <img className="email-icon" src="email-outline.svg" />
              <p>papaderos1998@gmail.com</p>
            </h2>
            <a href="https://github.com/Bluesman98">
              {" "}
              <i className="devicon-github-original"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
