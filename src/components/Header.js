import Pages from "./Pages";

export default function Header(props) {
  function emitOnPageSelected(page) {
    if (props.onPageSelected) {
      props.onPageSelected(page);
    }
  }

  return (
    <header className="header">
      <ul className="head">
        <li>
          <a href="#about" onClick={() => emitOnPageSelected(Pages.About)}>
            <button>About Me</button>
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => emitOnPageSelected(Pages.Portfolio)}
          >
            <button>Portfolio</button>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => emitOnPageSelected(Pages.Contact)}>
            <button>Contact</button>
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => emitOnPageSelected(Pages.Resume)}>
            <button>Resume</button>
          </a>
        </li>
      </ul>
    </header>
  );
}
