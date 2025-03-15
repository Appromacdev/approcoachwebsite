import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { GlobalStyles } from './styles/GlobalStyles';
import styled, { keyframes } from 'styled-components';
import { FaCog, FaTimes } from 'react-icons/fa';

// Preloader Animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const Preloader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--secondary) 0%, var(--dark) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: all 0.5s ease;
  animation: ${props => props.loaded ? fadeOut : 'none'} 0.5s forwards;
  animation-delay: 0.5s;
`;

const PreloaderContent = styled.div`
  text-align: center;
  color: white;
`;

const SpinnerContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto 20px;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: var(--accent);
  animation: ${rotate} 1s linear infinite;
`;

const PreloaderLogo = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  font-family: var(--heading-font);
  
  span {
    color: var(--accent);
  }
`;

const PreloaderText = styled.p`
  font-size: 1rem;
`;

// Theme Toggle Button
const ThemeToggle = styled.div`
  position: fixed;
  bottom: 75px;
  right: 20px;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 99;
  
  &:hover {
    transform: rotate(30deg);
  }
`;

function App() {
    const [loading, setLoading] = useState(true);
    const [themeOpen, setThemeOpen] = useState(false);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <GlobalStyles />

            {/* Preloader */}
            <Preloader loaded={!loading}>
                <PreloaderContent>
                    <SpinnerContainer>
                        <Spinner />
                    </SpinnerContainer>
                    <PreloaderLogo>
                        League<span>Coach</span>
                    </PreloaderLogo>
                    <PreloaderText>Loading amazing experience...</PreloaderText>
                </PreloaderContent>
            </Preloader>

            <div className="app">
                <Navbar />
                <main>
                    <AppRoutes />
                </main>
                <Footer />

                {/* Theme Toggle Button - For future implementation */}
                <ThemeToggle onClick={() => setThemeOpen(!themeOpen)}>
                    <FaCog />
                </ThemeToggle>
            </div>
        </Router>
    );
}

export default App;