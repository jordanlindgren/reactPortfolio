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
            About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => emitOnPageSelected(Pages.Portfolio)}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => emitOnPageSelected(Pages.Contact)}>
            Contact
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => emitOnPageSelected(Pages.Resume)}>
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}
