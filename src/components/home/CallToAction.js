import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { FaMobileAlt, FaRocket } from 'react-icons/fa';

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: 120px 0 150px;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/assets/images/pattern.png');
    opacity: 0.05;
    z-index: 0;
  }
`;

const ShapeDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 80px;
    filter: drop-shadow(0 -5px 10px rgba(0,0,0,0.05));
  }
  
  .shape-fill {
    fill: var(--light);
  }
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTATitle = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, white, var(--accent));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: var(--accent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.3rem;
  margin-bottom: 3.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
  
  .button-icon {
    font-size: 1.3rem;
    transition: all 0.3s ease;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.7s ease;
  }
  
  &:hover {
    .button-icon {
      transform: scale(1.2);
    }
    
    &::before {
      left: 100%;
      animation: ${shimmerAnimation} 1.5s infinite;
    }
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  width: ${props => props.size || '120px'};
  height: ${props => props.size || '120px'};
  background: ${props => props.bg || 'rgba(255, 255, 255, 0.05)'};
  border-radius: 50%;
  animation: ${floatAnimation} ${props => props.duration || '5s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: ${props => props.opacity || '0.4'};
  z-index: 0;
  
  &.element-1 {
    top: 30%;
    left: 10%;
  }
  
  &.element-2 {
    bottom: 15%;
    right: 15%;
  }
  
  &.element-3 {
    top: 15%;
    right: 25%;
  }
`;

const PhoneMockup = styled.div`
  position: absolute;
  bottom: 150px;
  right: 10%;
  width: 250px;
  height: 450px;
  background: linear-gradient(135deg, #222, #333);
  border-radius: 30px;
  border: 8px solid #444;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  display: none;
  
  @media (min-width: 1200px) {
    display: block;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 25px;
    background: #333;
    border-radius: 0 0 15px 15px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CallToAction = () => {
    return (
        <CTASection>
            <FloatingElement className="element-1" size="150px" duration="7s" />
            <FloatingElement className="element-2" size="100px" duration="6s" delay="1s" opacity="0.3" />
            <FloatingElement className="element-3" size="80px" duration="8s" delay="2s" bg="rgba(200, 155, 60, 0.1)" />

            <CTAContainer>
                <CTATitle>Ready to Improve Your Game?</CTATitle>
                <CTADescription>
                    Join thousands of players who have already started their journey to mastering
                    League of Legends with our personalized coaching platform.
                </CTADescription>
                <CTAButtons>
                    <StyledButton as={Link} to="/demo" size="large" variant="accent">
                        <span className="button-icon"><FaRocket /></span>
                        Try Demo
                    </StyledButton>
                    <StyledButton as="a" href="#download" size="large" variant="outline">
                        <span className="button-icon"><FaMobileAlt /></span>
                        Download App
                    </StyledButton>
                </CTAButtons>
            </CTAContainer>

            <PhoneMockup>
                <img src="/assets/images/app-screen.png" alt="App Preview" />
            </PhoneMockup>

            <ShapeDivider>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </ShapeDivider>
        </CTASection>
    );
};

export default CallToAction;