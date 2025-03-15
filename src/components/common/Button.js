import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const ButtonBase = css`
  display: inline-block;
  padding: ${props => props.size === 'large' ? '16px 32px' : props.size === 'small' ? '8px 16px' : '12px 24px'};
  font-size: ${props => props.size === 'large' ? '18px' : props.size === 'small' ? '14px' : '16px'};
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0.2) 50%, 
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    z-index: -1;
    transition: inherit;
    opacity: 0;
  }
  
  &:hover::before {
    opacity: 1;
    animation: ${shimmer} 1.5s infinite;
  }
`;

// Different button variants
const PrimaryButton = styled.button`
  ${ButtonBase}
  background: linear-gradient(90deg, var(--primary) 0%, #0063cc 100%);
  color: white;
  box-shadow: 0 4px 10px rgba(10, 132, 255, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 15px rgba(10, 132, 255, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(10, 132, 255, 0.4);
  }
`;

const SecondaryButton = styled.button`
  ${ButtonBase}
  background: linear-gradient(90deg, var(--secondary) 0%, #050b18 100%);
  color: white;
  box-shadow: 0 4px 10px rgba(9, 20, 40, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 15px rgba(9, 20, 40, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(9, 20, 40, 0.4);
  }
`;

const OutlineButton = styled.button`
  ${ButtonBase}
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  box-shadow: 0 2px 5px rgba(10, 132, 255, 0.1);
  
  &::before {
    background: linear-gradient(
      90deg, 
      rgba(10, 132, 255, 0) 0%, 
      rgba(10, 132, 255, 0.1) 50%, 
      rgba(10, 132, 255, 0) 100%
    );
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(10, 132, 255, 0.2);
    background-color: rgba(10, 132, 255, 0.05);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(10, 132, 255, 0.2);
  }
`;

const AccentButton = styled.button`
  ${ButtonBase}
  background: linear-gradient(90deg, var(--accent) 0%, #a17d33 100%);
  color: white;
  box-shadow: 0 4px 10px rgba(200, 155, 60, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 15px rgba(200, 155, 60, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(200, 155, 60, 0.4);
  }
`;

const DisabledButton = styled.button`
  ${ButtonBase}
  background: #e0e0e0;
  color: #888888;
  cursor: not-allowed;
  box-shadow: none;
  
  &:hover {
    transform: none;
    box-shadow: none;
  }
  
  &::before {
    display: none;
  }
`;

const Button = ({ children, variant = 'primary', size = 'medium', disabled = false, ...props }) => {
    if (disabled) {
        return (
            <DisabledButton size={size} {...props}>
                {children}
            </DisabledButton>
        );
    }

    switch (variant) {
        case 'secondary':
            return (
                <SecondaryButton size={size} {...props}>
                    {children}
                </SecondaryButton>
            );
        case 'outline':
            return (
                <OutlineButton size={size} {...props}>
                    {children}
                </OutlineButton>
            );
        case 'accent':
            return (
                <AccentButton size={size} {...props}>
                    {children}
                </AccentButton>
            );
        case 'primary':
        default:
            return (
                <PrimaryButton size={size} {...props}>
                    {children}
                </PrimaryButton>
            );
    }
};

export default Button;