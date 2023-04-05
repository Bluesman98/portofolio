function Header(props) {
  return (
    <div className="Header">
      <nav>
        <a
          onClick={() => {
            const element = document.querySelector(".Home");
            element.scrollIntoView();
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            const element = document.querySelector(".About");
            element.scrollIntoView();
          }}
        >
          About
        </a>
        <a
          onClick={() => {
            const element = document.querySelector(".Projects");
            element.scrollIntoView();
          }}
        >
          Projects
        </a>
        <a
          onClick={() => {
            const element = document.querySelector(".Contact");
            element.scrollIntoView();
          }}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
export default Header;
