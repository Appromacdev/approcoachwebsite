import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes, FaGamepad } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glowPulse = keyframes`
  0% {
    box-shadow: 0 0 5px var(--accent);
  }
  50% {
    box-shadow: 0 0 15px var(--accent);
  }
  100% {
    box-shadow: 0 0 5px var(--accent);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(9, 20, 40, 0.95)' : 'transparent')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.4s ease;
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 5px 20px rgba(0, 0, 0, 0.1)' : 'none')};
  animation: ${fadeIn} 0.5s ease-out;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.div`
  margin-right: 10px;
  color: var(--accent);
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  ${LogoContainer}:hover & {
    transform: rotate(15deg);
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  font-family: var(--heading-font);
  display: flex;
  align-items: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  span {
    color: var(--accent);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--accent);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
  }

  &:hover {
    color: white;
    transform: scale(1.05);
    
    span::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: linear-gradient(135deg, var(--dark) 0%, rgba(9, 20, 40, 0.95) 100%);
    transition: right 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    padding: 5rem 2rem 2rem;
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
    justify-content: flex-start;
    backdrop-filter: blur(10px);
    z-index: 99;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1.2rem;
  color: ${({ active }) => (active ? 'var(--accent)' : 'white')};
  font-weight: 600;
  position: relative;
  padding: 5px 0;
  transition: all 0.3s ease;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: var(--accent);
    transition: all 0.3s ease;
  }
  
  &::before {
    top: 0;
    left: 0;
    transform-origin: left;
  }
  
  &::after {
    bottom: 0;
    right: 0;
    transform-origin: right;
  }

  &:hover {
    color: var(--accent);
    transform: translateY(-2px);
    
    &::before, &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }
`;

const DemoButton = styled(Link)`
  padding: 10px 20px;
  margin-left: 1.5rem;
  background: linear-gradient(135deg, var(--accent) 0%, #a17d33 100%);
  color: white;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 15px rgba(200, 155, 60, 0.2);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    transform: rotate(45deg);
    transition: all 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #a17d33 0%, var(--accent) 100%);
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(200, 155, 60, 0.3);
    animation: ${glowPulse} 2s infinite;
    
    &::after {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    margin: 2rem 0 0;
    width: 100%;
    text-align: center;
  }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
    };

    // Close menu when clicking on a link (for mobile)
    const closeMenu = () => {
        if (isOpen) {
            setIsOpen(false);
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <Nav scrolled={scrolled}>
            <LogoContainer>
                <Logo to="/">
                    <LogoIcon>
                        <FaGamepad />
                    </LogoIcon>
                    League<span>Coach</span>
                </Logo>
            </LogoContainer>

            <MenuIcon onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </MenuIcon>

            <NavLinks isOpen={isOpen}>
                <NavLink
                    to="/"
                    active={location.pathname === '/' ? 'true' : undefined}
                    onClick={closeMenu}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/features"
                    active={location.pathname === '/features' ? 'true' : undefined}
                    onClick={closeMenu}
                >
                    Features
                </NavLink>
                <NavLink
                    to="/about"
                    active={location.pathname === '/about' ? 'true' : undefined}
                    onClick={closeMenu}
                >
                    About
                </NavLink>
                <DemoButton to="/demo" onClick={closeMenu}>
                    Try Demo
                </DemoButton>
            </NavLinks>
        </Nav>
    );
};

export default Navbar;