  import React, { useEffect, useState } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faPhone,
    faMapMarkerAlt,
    faEnvelope,
    faArrowRight,
    faChild,
    faBook,
    faSchool,
    faArrowUp,
  } from "@fortawesome/free-solid-svg-icons";
  import { Link, Element } from "react-scroll";
  import { Fade, Slide, Zoom } from "react-awesome-reveal";
  import "./Home.css";
  import Navbar from "./components/Navbar"; // Adjust the path as necessary
  import Footer from "./components/Footer"; 
  // Adjust the path if necessary


  const branches = [
    {
      address: "Pastor Road, Gulod Labac, Batangas City",
      phone: "0960 271 5298",
      email: "smcbatangascity@sunhilledu.com",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1867.0134492727382!2d121.072805!3d13.759904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd054e7cd0e3c9%3A0xc70c4d1504ab5814!2sSunhill%20Montessori%20Casa%20-%20Batangas!5e1!3m2!1sen!2sus!4v1722871137741!5m2!1sen!2sus",
    },
    {
      address: "Branch 2 Address",
      phone: "1234 567 890",
      email: "branch2@example.com",
      mapSrc:
        "https://maps.google.com/maps?q=Branch%202%20Address&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      address: "Branch 3 Address",
      phone: "0987 654 321",
      email: "branch3@example.com",
      mapSrc:
        "https://maps.google.com/maps?q=Branch%203%20Address&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      address: "Branch 4 Address",
      phone: "5555 666 777",
      email: "branch4@example.com",
      mapSrc:
        "https://maps.google.com/maps?q=Branch%204%20Address&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
  ];

  const Home = () => {
    const [darkMode, setDarkMode] = useState(() => {
      const storedDarkMode = localStorage.getItem("darkMode");
      return storedDarkMode === "true";
    });
  
    const [buttonPosition, setButtonPosition] = useState(0);
    const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
    const [currentBranchIndex, setCurrentBranchIndex] = useState(0);
  
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

    useEffect(() => {
      const handleScroll = () => {
        setIsScrollToTopVisible(window.scrollY > 300);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, []);
  
    const toggleDarkMode = () => {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      setButtonPosition(newDarkMode ? 25 : 0);
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    const handleBranchChange = (index) => {
      setCurrentBranchIndex(index);
    };  

    return (
      <div className={`app ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} buttonPosition={buttonPosition} />

        {/* Main Content Sections */}
        <Element name="home" className="home" id="home">
          <div className="home-banner-content">
            <Fade direction="down" triggerOnce={false}>
              <h1>Welcome to Sunhill Montessori Casa</h1>
            </Fade>
            <Fade triggerOnce={false} delay={300}>
              <p>
                We are an institution driven by our ultimate goal of bringing each
                child closer to God.
              </p>
            </Fade>
            <Fade direction="up" triggerOnce={true}>
              <Link
                to="about"
                className="cta-button"
                smooth={true}
                duration={500}
              >
                Learn More{" "}
                <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
              </Link>
            </Fade>
          </div>
        </Element>

        <Element name="about" className="about" id="about"> 
          <Fade triggerOnce={true}>
            <div className="section-content">
              <div className="about-items">
                <Slide direction="up" triggerOnce={true} delay={50}>
                  <div className="about-item">
                    <img
                      src="../assets/resources.gif"
                      alt="Easy access to learning modules"
                    />
                    <h3>Easy access to learning modules</h3>
                    <p>
                      Students can study ahead, review past lessons, and watch
                      instructional videos with a click or a tap of a button on
                      any gadget.
                    </p>
                  </div>
                </Slide>
                <Slide direction="up" triggerOnce={true} delay={100}>
                  <div className="about-item">
                    <img
                      src="../assets/interactive.gif"
                      alt="interactive activities and assessments"
                    />
                    <h3>Activities and assessments</h3>
                    <p>
                      Students can test their knowledge and skills through
                      interactive polls, quizzes, and debates, among others.
                    </p>
                  </div>
                </Slide>
                <Slide direction="up" triggerOnce={true} delay={200}>
                  <div className="about-item">
                    <img src="../assets/progress.gif" alt="Progress monitoring" />
                    <h3>Progress monitoring</h3>
                    <p>
                      Track student progress with comprehensive reports and
                      analytics, helping educators to personalize learning and
                      improve outcomes.
                    </p>
                  </div>
                </Slide>
                <Slide direction="up" triggerOnce={true} delay={300}>
                  <div className="about-item">
                    <img src="../assets/collab.gif" alt="collab" />
                    <h3>Collaborate with classmates</h3>
                    <p>
                      The eLMS allows the students to chat with classmates, join
                      forum discussions, write a blog, and facilitate group work
                      activities — all within the site.
                    </p>
                  </div>
                </Slide>
              </div>
            </div>
          </Fade>
        </Element>

        <Element name="special-identification" className="special-identification" id="special-education">
          <div className="section-content">
            <Fade>
              <h2>Special Education Identification Tool</h2>
            </Fade>
            <div className="special-identification-content">
              <div className="special-identification-text">
                <Slide direction="left" triggerOnce={true} delay={200}>
                  <p>"Empowering Educators and Parents to Identify and Support Students with Special Needs"</p>
                </Slide>
                <Slide direction="left" triggerOnce={true} delay={400}>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faSchool} className="icon" />{" "}
                      Comprehensive assessment toolkit
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faBook} className="icon" />{" "}
                      Individualized education plans
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faChild} className="icon" />{" "}
                      Professional development resources
                    </li>
                  </ul>
                </Slide>
                <Slide direction="left" triggerOnce={true} delay={600}>
                  <a href="/login" className="cta-button-special">
                    Get Started{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
                  </a>
                </Slide>
              </div>
              <div className="special-identification-image">
                <Zoom triggerOnce={true}>
                  <img src="../assets/stu.png" alt="Special Education" />
                </Zoom>
              </div>
            </div>
          </div>
        </Element>

        <Element name="contact" className="contact" id="contact">
          <div className="container">
            <Fade triggerOnce={false} direction="up">
              <h2 className="heading">Contact Us</h2>
            </Fade>
            <div className="content">
              <Slide direction="left" triggerOnce={true}>
                <div className="contact-details">
                  <div className="contact-info">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                    <span>{branches[currentBranchIndex].address}</span>
                  </div>
                  <div className="contact-info">
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    <span>{branches[currentBranchIndex].phone}</span>
                  </div>
                  <div className="contact-info">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <span>{branches[currentBranchIndex].email}</span>
                  </div>
                  <div className="branch-buttons">
                    {branches.map((branch, index) => (
                      <button
                        key={index}
                        onClick={() => handleBranchChange(index)}
                        className={`branch-button ${
                          currentBranchIndex === index ? "active" : ""
                        }`}
                      >
                        Branch {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </Slide>
              <Slide direction="right" triggerOnce={true}>
                <div className="map">
                  <iframe
                    title="frame"
                    src={branches[currentBranchIndex].mapSrc}
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </Slide>
            </div>
          </div>
        </Element>

        <Footer />

        {/* Scroll to Top Button */}
        {isScrollToTopVisible && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}  
        
      </div>
    );
  };

  export default Home;
