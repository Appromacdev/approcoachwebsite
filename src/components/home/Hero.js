import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { FaChevronDown } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(9, 20, 40, 0.9), rgba(10, 132, 255, 0.85)), 
              url('/assets/images/hero-bg.jpg') no-repeat center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/assets/images/pattern.png');
    opacity: 0.1;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, var(--background), transparent);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeIn} 1s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  max-width: 700px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  span {
    color: var(--accent);
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: var(--accent);
      opacity: 0.3;
      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    
    span::after {
      height: 5px;
      bottom: 3px;
    }
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const AnimatedGradient = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(10, 132, 255, 0.3) 0%, rgba(201, 155, 60, 0.2) 70%);
  filter: blur(60px);
  animation: ${float} 6s infinite ease-in-out;
  z-index: 0;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    right: -50px;
  }
`;

const SecondGradient = styled.div`
  position: absolute;
  bottom: 15%;
  left: 10%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201, 155, 60, 0.2) 0%, rgba(10, 132, 255, 0.1) 70%);
  filter: blur(50px);
  animation: ${float} 8s 1s infinite ease-in-out;
  z-index: 0;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    left: -50px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 5;
  opacity: 0.8;
  transition: all 0.3s ease;
  cursor: pointer;
  animation: ${float} 2s infinite ease-in-out;

  &:hover {
    opacity: 1;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const HeroImage = styled.div`
  position: absolute;
  right: 5%;
  bottom: 15%;
  width: 500px;
  height: 330px;
  background: url('/assets/images/app-mockup.png') no-repeat center;
  background-size: contain;
  z-index: 2;
  animation: ${float} 5s infinite ease-in-out;
  display: none;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const Hero = () => {
    const scrollToFeatures = () => {
        const featuresSection = document.querySelector('#features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <HeroSection>
            <AnimatedGradient />
            <SecondGradient />
            <HeroContent>
                <HeroTitle>
                    Level Up Your <span>League of Legends</span> Skills
                </HeroTitle>
                <HeroSubtitle>
                    Personalized coaching, detailed stats analysis, and custom mini-games
                    designed to improve your gameplay and help you climb the ranks faster than ever before.
                </HeroSubtitle>
                <HeroActions>
                    <Button as={Link} to="/demo" size="large">
                        Try the Demo
                    </Button>
                    <Button as={Link} to="/features" variant="outline" size="large">
                        Explore Features
                    </Button>
                </HeroActions>
            </HeroContent>
            <HeroImage />
            <ScrollIndicator onClick={scrollToFeatures}>
                <p>Discover More</p>
                <FaChevronDown />
            </ScrollIndicator>
        </HeroSection>
    );
};

export default Hero;