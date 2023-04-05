function Home(props) {
  return (
    <div className="Home">
      <div>
        <h1>
          Hello, I'm George <br />I am a full stack web developer
        </h1>
        <button
          onClick={() => {
            const element = document.querySelector(".About");
            element.scrollIntoView();
          }}
        >
          <p>About me</p>
        </button>
      </div>
      <div className="img-placeholder">
        <img src="programmer.png"></img>
      </div>
    </div>
  );
}
export default Home;
