  import React, { useEffect, useState } from "react";
  import Navbar from './components/Navbar'; // Adjust the path if needed
  import Footer from './components/Footer'; // Adjust the path if needed
  import { Link as RouterLink} from "react-router-dom";
  import './Login.css'; // Import your CSS file here

  const LoginPageContent = () => {
    const [darkMode, setDarkMode] = useState(() => {
      const storedDarkMode = localStorage.getItem("darkMode");
      return storedDarkMode === "true";
    });

    const [buttonPosition, setButtonPosition] = useState(0);


    // const [viewCount, setViewCount] = useState(() => {
    //   const storedCount = localStorage.getItem("viewCount");
    //   return storedCount ? parseInt(storedCount, 10) : 0;
    // });

    // useEffect(() => {
    //   const storedCount = localStorage.getItem("viewCount");
    //   const initialCount = storedCount ? parseInt(storedCount, 10) : 0;
    //   const newCount = initialCount + 1;
    //   setViewCount(newCount);
    //   localStorage.setItem("viewCount", newCount.toString());
    // }, []); // Empty dependency array ensures this runs only once


    
    const toggleDarkMode = () => {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      setButtonPosition(newDarkMode ? 25 : 0);
    };

    useEffect(() => {
      const storedDarkMode = localStorage.getItem("darkMode");
      if (storedDarkMode === "true") {
        setDarkMode(true);
        setButtonPosition(25);
      }
    }, []);

    return (
      <div className="login-page-content" >
            <div className={`app ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} buttonPosition={buttonPosition} />
        <main className="login-main">
          <div className="logo-container">
            <img src="./assets/Sunlogo.png" alt="LMS Logo" className="logo" />
          </div>
          <div className="portal-container">
            <div className="portal">
              <button className="portal-btn teacher-btn">
                Teacher Portal
                <p>Access your Teacher/Admin Account.</p>
              </button>
            </div>
            <div className="portal">
              <RouterLink to="/student-login" className="portal-btn student-btn">
                Student Portal
                <p>Sign in to your Student account or create a new account.</p>
              </RouterLink>
            </div>
            <div className="portal">
              <button className="portal-btn parent-btn">
                Parent/Guardian Portal
                <p>Access your Parent or Guardian account.</p>
              </button>
            </div>
            
          </div>
          
        </main>
        <Footer /> {/* Add Footer */}
      </div>
      </div>
    );
  };

  export default LoginPageContent;
