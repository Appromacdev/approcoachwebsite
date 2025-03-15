import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {
    FaTwitter,
    FaDiscord,
    FaGithub,
    FaYoutube,
    FaTwitch,
    FaGamepad,
    FaArrowUp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt
} from 'react-icons/fa';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(10, 132, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(10, 132, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(10, 132, 255, 0);
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

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, var(--secondary) 0%, var(--dark) 100%);
  color: white;
  padding: 5rem 0 2rem;
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

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 3rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const LogoIcon = styled.div`
  margin-right: 10px;
  color: var(--accent);
  font-size: 2rem;
  transition: all 0.3s ease;
  
  ${LogoContainer}:hover & {
    transform: rotate(15deg);
  }
`;

const FooterLogo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  display: inline-block;
  transition: all 0.3s ease;

  span {
    color: var(--accent);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
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
    
    span::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin-top: 1.5rem;
  line-height: 1.7;
  max-width: 350px;
`;

const FooterHeading = styled.h4`
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 3px;
    transition: width 0.3s ease;
  }
  
  ${FooterSection}:hover &::after {
    width: 60px;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 1rem;

  a {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 5px;
    
    &::before {
      content: '';
      position: absolute;
      left: -5px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px 0 5px 5px;
      border-color: transparent transparent transparent var(--accent);
      opacity: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      color: var(--accent);
      padding-left: 10px;
      
      &::before {
        opacity: 1;
        left: 0;
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.2rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    animation: ${pulse} 1.5s infinite;
    
    &::before {
      opacity: 1;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  
  svg {
    margin-right: 15px;
    min-width: 18px;
    color: var(--accent);
  }
  
  a {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--accent);
    }
  }
`;

const NewsletterForm = styled.form`
  margin-top: 1.5rem;
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 2px var(--accent);
  }
`;

const SubscribeButton = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 10px;
  
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
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &::before {
      left: 100%;
      animation: ${shimmer} 1.5s infinite;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 3rem;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  
  a {
    color: var(--accent);
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      color: white;
    }
  }
`;

const FooterBottomFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ScrollToTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 99;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(20px)')};
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
`;

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <LogoContainer>
                        <LogoIcon>
                            <FaGamepad />
                        </LogoIcon>
                        <FooterLogo to="/">
                            League<span>Coach</span>
                        </FooterLogo>
                    </LogoContainer>
                    <FooterText>
                        Personalized coaching to improve your League of Legends skills.
                        Track your progress and master game mechanics with our specialized tools and AI-powered analysis.
                    </FooterText>
                    <SocialLinks>
                        <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </SocialIcon>
                        <SocialIcon href="https://discord.com" target="_blank" rel="noopener noreferrer">
                            <FaDiscord />
                        </SocialIcon>
                        <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </SocialIcon>
                        <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </SocialIcon>
                        <SocialIcon href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
                            <FaTwitch />
                        </SocialIcon>
                    </SocialLinks>
                </FooterSection>

                <FooterSection>
                    <FooterHeading>Quick Links</FooterHeading>
                    <FooterLinks>
                        <FooterLink>
                            <Link to="/">Home</Link>
                        </FooterLink>
                        <FooterLink>
                            <Link to="/features">Features</Link>
                        </FooterLink>
                        <FooterLink>
                            <Link to="/about">About</Link>
                        </FooterLink>
                        <FooterLink>
                            <Link to="/demo">Try Demo</Link>
                        </FooterLink>
                        <FooterLink>
                            <a href="#pricing">Pricing</a>
                        </FooterLink>
                        <FooterLink>
                            <a href="#download">Download</a>
                        </FooterLink>
                    </FooterLinks>
                </FooterSection>

                <FooterSection>
                    <FooterHeading>Resources</FooterHeading>
                    <FooterLinks>
                        <FooterLink>
                            <a href="#documentation">Documentation</a>
                        </FooterLink>
                        <FooterLink>
                            <a href="#faq">FAQ</a>
                        </FooterLink>
                        <FooterLink>
                            <a href="#tutorials">Tutorials</a>
                        </FooterLink>
                        <FooterLink>
                            <a href="#blog">Blog</a>
                        </FooterLink>
                        <FooterLink>
                            <a href="#community">Community</a>
                        </FooterLink>
                        <FooterLink>
                            <a href="#support">Support Center</a>
                        </FooterLink>
                    </FooterLinks>
                </FooterSection>

                <FooterSection>
                    <FooterHeading>Contact Us</FooterHeading>
                    <ContactItem>
                        <FaMapMarkerAlt />
                        <span>123 Gaming Street, Los Angeles, CA 90001</span>
                    </ContactItem>
                    <ContactItem>
                        <FaPhoneAlt />
                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </ContactItem>
                    <ContactItem>
                        <FaEnvelope />
                        <a href="mailto:contact@leaguecoach.app">contact@leaguecoach.app</a>
                    </ContactItem>

                    <FooterHeading style={{ marginTop: '2rem' }}>Newsletter</FooterHeading>
                    <FooterText>Subscribe to get updates on new features and releases.</FooterText>
                    <NewsletterForm>
                        <NewsletterInput type="email" placeholder="Your email address" />
                        <SubscribeButton type="submit">
                            <FaEnvelope />
                            <span>Subscribe</span>
                        </SubscribeButton>
                    </NewsletterForm>
                </FooterSection>
            </FooterContent>

            <FooterBottom>
                <FooterBottomFlex>
                    <p>&copy; {new Date().getFullYear()} LeagueCoach. All rights reserved.</p>
                    <FooterBottomLinks>
                        <a href="#terms">Terms of Service</a>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#cookies">Cookie Policy</a>
                    </FooterBottomLinks>
                </FooterBottomFlex>
            </FooterBottom>

            <ScrollToTop visible={showScrollTop} onClick={scrollToTop}>
                <FaArrowUp />
            </ScrollToTop>
        </FooterContainer>
    );
};

export default Footer;