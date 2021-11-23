import "./App.css";
import Pages from "./components/Pages";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState(Pages.About);

  function onHashChanged() {
    const url = new URL(window.location.href);
    console.log(url.hash);
    let expectedPage = Pages.About;
    switch (url.hash) {
      case "#about":
        expectedPage = Pages.About;
        break;
      case "#portfolio":
        expectedPage = Pages.Portfolio;
        break;
      case "#resume":
        expectedPage = Pages.Resume;
        break;
      case "#contact":
        expectedPage = Pages.Contact;
        break;
    }

    if (expectedPage !== undefined && expectedPage !== currentPage) {
      console.log(`Updating from ${currentPage} -> ${expectedPage}`);
      setCurrentPage(expectedPage);
    }
  }

  useEffect(() => {
    onHashChanged();
    window.addEventListener("hashchange", onHashChanged);
    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  });

  return (
    <div className="App">
      <Header onPageSelected={setCurrentPage} />
      <main>{getCurrentPageComp(currentPage)}</main>
      <Footer />
    </div>
  );
}

function getCurrentPageComp(currentPage) {
  if (currentPage === Pages.About) {
    return <About></About>;
  } else if (currentPage === Pages.Portfolio) {
    return <Portfolio></Portfolio>;
  } else if (currentPage === Pages.Contact) {
    return <Contact></Contact>;
  } else if (currentPage === Pages.Resume) {
    return <Resume></Resume>;
  }
}

export default App;
