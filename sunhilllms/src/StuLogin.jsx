import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Login.css';
import './animated'

const StudentLogin = () => {
  const formRef = useRef(null);
  const characterRef = useRef(null);
  const [isEyesClosed, setIsEyesClosed] = useState(false);

  useEffect(() => {
    // Animate form on load
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  
    const handleFocus = () => {
      gsap.to(characterRef.current, {
        rotation: 5,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const handleBlur = () => {
      gsap.to(characterRef.current, {
        rotation: 0,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const handlePasswordFocus = () => {
      setIsEyesClosed(true); // Close eyes when focusing on the password field
      gsap.to(characterRef.current, {
        scaleX: 0.9,
        scaleY: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const handlePasswordBlur = () => {
      setIsEyesClosed(false); // Open eyes when leaving the password field
      gsap.to(characterRef.current, {
        scaleX: 0.9,
        scaleY: 1,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    const usernameField = formRef.current.querySelector('.username');
    const passwordField = formRef.current.querySelector('.password');

    usernameField.addEventListener('focus', handleFocus);
    usernameField.addEventListener('blur', handleBlur);

    passwordField.addEventListener('focus', handlePasswordFocus);
    passwordField.addEventListener('blur', handlePasswordBlur);

    return () => {
      usernameField.removeEventListener('focus', handleFocus);
      usernameField.removeEventListener('blur', handleBlur);
      passwordField.removeEventListener('focus', handlePasswordFocus);
      passwordField.removeEventListener('blur', handlePasswordBlur);
    };
  }, []);

  return (
    <div className="student-login-page">
      
        <div class="fire-wrapper">
            <img class="fire" src="https://stivs.dev/assets/rocket/fire.svg" alt=''/>
          </div>

          <div class="rain rain1"></div>
          <div class="rain rain2">
            <div class="drop drop2"></div>
          </div>
          <div class="rain rain3"></div>
          <div class="rain rain4"></div>
          <div class="rain rain5">
            <div class="drop drop5"></div>
          </div>
          <div class="rain rain6"></div>
          <div class="rain rain7"></div>
          <div class="rain rain8">
            <div class="drop drop8"></div>
          </div>
          <div class="rain rain9"></div>
          <div class="rain rain10"></div>
          <div class="drop drop11"></div>
          <div class="drop drop12"></div>
          <div id='canvas'></div>
          
      <div className="login-container">
        <div className="character-container">
        
        <div className='welcome'>
                <h1>Welcome, student!</h1>
            </div>
          <div className='character'>
          <img
            src={isEyesClosed ? "./assets/close.png" : "./assets/open.png"}
            alt="Student Character"
            className="student-character"
            ref={characterRef}
          />
          </div>
        </div>
      
        <div className="form-container" ref={formRef}>
          <h1>Student Login</h1>
          <form className="login-form">
            <input type="text" placeholder="Enter your Login ID" className="username" />
            <input type="password" placeholder="Enter your password" className="password" />
            <a href="#login" className="forgot-password">Forgot your password?</a>
            <div className="keep-logged-in">
              <input type="checkbox" id="keepLoggedIn" />
              <label htmlFor="keepLoggedIn">Keep me logged in</label>
            </div>
            <button type="submit">Login</button>
            
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;