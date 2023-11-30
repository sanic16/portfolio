import "./App.css";
import Navbar from "./sections/navbar/Navbar";
import About from "./sections/about/About";
import Header from "./sections/header/Header";
import Theme from "./theme/Theme";
import useThemeContext from "./context/theme-context";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Footer from "./sections/footer/Footer";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import { useState, useEffect, useRef } from "react";
import FloatingNav from "./sections/floating-nav/FloatingNav";

const themePrimary = [
  "color-1",
  "color-2",
  "color-3",
  "color-4",
  "color-5",
  "color-6",
];

function App() {
  const [currentTheme, setCurrentTheme] = useState(themePrimary[0]);
  const { themeState, themeHandler } = useThemeContext();

  const mainRef = useRef<HTMLElement>(null);

  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  const floatingNavToggleHandler = () => {
    if(
      mainRef?.current && 
      (
        siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 || 
        siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20)
      ){
        showFloatingNavHandler();
      }else{
        hideFloatingNavHandler();
      }
    
      // update siteYPosition
      setSiteYPosition(mainRef?.current?.getBoundingClientRect().y || 0)
      console.log('current siteYPosition: ', siteYPosition)
      console.log('showFloatingNav: ', showFloatingNav)
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    return () => {
      clearInterval(checkYPosition)
    };
  }, [siteYPosition])

  useEffect(() => {
    const intervalId = setTimeout(() => {
      // toggle theme every 1 second sequentially
      const currentIndex =
        (themePrimary.indexOf(currentTheme) + 1) % themePrimary.length;
      const nextTheme = themePrimary[currentIndex];

      setCurrentTheme(nextTheme);

      themeHandler(currentTheme);
    }, 500);

    return () => clearInterval(intervalId);
  }, [currentTheme]);

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
}

export default App;
