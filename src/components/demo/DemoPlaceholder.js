import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMobileAlt, FaSpinner, FaRocket, FaEnvelope } from 'react-icons/fa';
import Button from '../common/Button';

const float = keyframes`
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

const pulse = keyframes`
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const DemoContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: white;
  border-radius: 20px;
  box-shadow: var(--shadow-medium);
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    background-size: 200% 200%;
    animation: ${gradient} 5s ease infinite;
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 2rem;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 25px rgba(10, 132, 255, 0.3);
  position: relative;
  
  svg {
    animation: ${float} 3s infinite ease-in-out;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    border: 2px dashed rgba(10, 132, 255, 0.3);
    animation: ${spin} 15s linear infinite;
  }
`;

const DemoTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--dark);
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 3px;
  }
`;

const DemoDescription = styled.p`
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
`;

const MockupContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin: 3rem 0;
  flex-wrap: wrap;
  
  @media (max-width: 992px) {
    gap: 3rem;
  }
`;

const MockupFrame = styled.div`
  position: relative;
  width: 280px;
  height: 500px;
  border: 12px solid #222;
  border-radius: 40px;
  background-color: #000;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  animation: ${float} 6s infinite ease-in-out;
  animation-delay: ${props => props.delay || '0s'};
  
  &:hover {
    transform: scale(1.05) translateY(-10px);
    box-shadow: 0 35px 60px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 150px;
    height: 25px;
    background: #222;
    left: 50%;
    transform: translateX(-50%);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    width: 120px;
    height: 5px;
    background: #444;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
  }
`;

const MockupScreen = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.bg || 'linear-gradient(145deg, var(--secondary) 0%, var(--primary) 100%)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
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
  }
`;

const ComingSoonText = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const LoadingAnimation = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  svg {
    margin-right: 10px;
    animation: ${spin} 2s linear infinite;
  }
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  margin: 1.5rem 0;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 30%;
    background: linear-gradient(90deg, var(--accent), white);
    border-radius: 5px;
    animation: ${shimmer} 2s infinite;
    background-size: 200% 100%;
  }
`;

const ScreenElement = styled.div`
  width: 80%;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 15px;
  animation: ${pulse} 2s infinite ease-in-out;
  animation-delay: ${props => props.delay || '0s'};
`;

const EmailForm = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.h4`
  margin-bottom: 1.5rem;
  color: var(--dark);
  font-size: 1.3rem;
`;

const InputContainer = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  overflow: hidden;
  
  @media (max-width: 576px) {
    flex-direction: column;
    border-radius: 10px;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 15px 25px;
  border: none;
  font-size: 1rem;
  font-family: var(--body-font);
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 576px) {
    padding: 15px;
    border-bottom: 1px solid #eee;
  }
`;

const SubscribeButton = styled.button`
  padding: 15px 30px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  color: white;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover {
    background: linear-gradient(90deg, var(--accent), var(--primary));
  }
  
  @media (max-width: 576px) {
    padding: 15px;
  }
`;

const DemoPlaceholder = () => {
    return (
        <DemoContainer>
            <IconContainer>
                <FaMobileAlt />
            </IconContainer>
            <DemoTitle>Interactive Demo Coming Soon</DemoTitle>
            <DemoDescription>
                We're working on an interactive demo that will allow you to experience the app's
                features directly in your browser. Our development team is putting the finishing
                touches on a web version that showcases the core functionality.
            </DemoDescription>

            <MockupContainer>
                <MockupFrame>
                    <MockupScreen>
                        <ComingSoonText>Coming Soon</ComingSoonText>
                        <p>LeagueCoach App Demo</p>
                        <LoadingAnimation>
                            <FaSpinner />
                            <span>Loading...</span>
                        </LoadingAnimation>
                        <ProgressBar />
                    </MockupScreen>
                </MockupFrame>

                <MockupFrame delay="0.5s">
                    <MockupScreen bg="linear-gradient(145deg, #0A1428 0%, #0A84FF 100%)">
                        <ComingSoonText>Stats Dashboard</ComingSoonText>
                        <ScreenElement delay="0.2s" />
                        <ScreenElement delay="0.4s" />
                        <ScreenElement delay="0.6s" />
                        <ScreenElement delay="0.8s" />
                    </MockupScreen>
                </MockupFrame>
            </MockupContainer>

            <EmailForm>
                <FormTitle>Get Notified When The Demo Is Ready</FormTitle>
                <InputContainer>
                    <EmailInput type="email" placeholder="Enter your email address" />
                    <SubscribeButton>
                        <FaEnvelope />
                        <span>Subscribe</span>
                    </SubscribeButton>
                </InputContainer>
            </EmailForm>

            <Button as="a" href="#features" size="large" variant="accent" style={{ marginTop: '3rem' }}>
                <FaRocket style={{ marginRight: '10px' }} />
                Explore Features While You Wait
            </Button>
        </DemoContainer>
    );
};

export default DemoPlaceholder;