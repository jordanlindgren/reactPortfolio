const portfolioData = require("../data/portfolio.json");

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className={"portfolio-grid"}>{generatePortfolioItems()}</div>
    </div>
  );
}

function generatePortfolioItems() {
  let result = [];
  for (let project of portfolioData) {
    result.push(<PortfolioItem {...project} />);
  }
  return result;
}

function PortfolioItem(props) {
  // props.img
  // props.title
  // props.link
  // props.repo
  return (
    <div
      className={"portfolio-item"}
      style={{ backgroundImage: `url('${props.img}')` }}
    >
      <h3>
        <a href={props.link}>{props.title}</a>
        <a href={props.repo}>
          <img src="/images/GitHub.png" height="16" width="16" />
        </a>
      </h3>
      <p>{props.description}</p>
    </div>
  );
}
