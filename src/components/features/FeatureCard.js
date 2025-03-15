import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../common/Button';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-small);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
    z-index: 2;
  }
  
  &:hover {
    transform: translateY(-15px);
    box-shadow: var(--shadow-large);
    
    &::before {
      transform: scaleX(1);
    }
    
    .card-image img {
      transform: scale(1.1);
    }
  }
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    z-index: 1;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: var(--dark);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  ${Card}:hover &::after {
    width: 100%;
  }
`;

const CardDescription = styled.p`
  color: #555;
  margin-bottom: 1.8rem;
  line-height: 1.7;
  font-size: 1.05rem;
`;

const CardTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const CardTag = styled.span`
  display: inline-block;
  background-color: ${props => props.color || 'var(--primary)'};
  color: white;
  border-radius: 30px;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const CustomButton = styled(Button)`
  position: relative;
  overflow: hidden;
  
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
    z-index: 1;
  }
  
  &:hover::before {
    animation: ${shimmer} 1.5s infinite;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: -25px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 3;
  animation: ${float} 3s infinite ease-in-out;
`;

const FeatureCard = ({
    image,
    title,
    description,
    tags,
    buttonText,
    buttonLink,
    tagColors,
    icon
}) => {
    return (
        <Card>
            {image && (
                <CardImageContainer className="card-image">
                    <CardImage src={image} alt={title} />
                </CardImageContainer>
            )}
            <CardContent>
                {icon && <IconContainer>{icon}</IconContainer>}

                {tags && tags.length > 0 && (
                    <CardTagContainer>
                        {tags.map((tag, index) => (
                            <CardTag key={index} color={tagColors && tagColors[index]}>
                                {tag}
                            </CardTag>
                        ))}
                    </CardTagContainer>
                )}

                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>

                {buttonText && (
                    <CustomButton
                        as="a"
                        href={buttonLink}
                        variant="primary"
                        size="medium"
                    >
                        {buttonText}
                    </CustomButton>
                )}
            </CardContent>
        </Card>
    );
};

export default FeatureCard;