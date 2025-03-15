import React, { useEffect } from 'react';
import styled from 'styled-components';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import CallToAction from '../components/home/CallToAction';
import { FaComments, FaMedal, FaUsers, FaCheck } from 'react-icons/fa';

const StatsSection = styled.section`
  padding: 80px 0;
  background-color: white;
  position: relative;
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.bg || 'var(--primary)'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  box-shadow: 0 10px 20px ${props => props.shadow || 'rgba(10, 132, 255, 0.2)'};
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--dark);
  background: ${props => props.gradient || 'linear-gradient(90deg, var(--primary), #0063cc)'};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const StatTitle = styled.p`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`;

const TestimonialsSection = styled.section`
  padding: 100px 0;
  background-color: var(--light);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/assets/images/pattern-light.png');
    opacity: 0.07;
    z-index: 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  font-size: 2.8rem;
  color: var(--dark);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 2px;
  }
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '"';
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 120px;
    font-family: serif;
    color: rgba(10, 132, 255, 0.1);
    line-height: 1;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
  color: #444;
  line-height: 1.7;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  margin-bottom: 0.25rem;
  color: var(--dark);
`;

const AuthorRank = styled.p`
  font-size: 0.9rem;
  color: var(--accent);
  font-weight: 600;
`;

const Home = () => {
    // Smooth scroll for anchor links
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, []);

    const testimonials = [
        {
            text: "LeagueCoach helped me identify weaknesses in my gameplay I didn't even know existed. After just a month of using the app, I climbed from Silver to Platinum!",
            author: "Alex K.",
            rank: "Platinum II",
            image: "/assets/images/testimonial-1.jpg"
        },
        {
            text: "The mini-games are actually fun and really help improve specific mechanics. My CS per minute increased by 30% after practicing with the last hit trainer.",
            author: "Sarah M.",
            rank: "Diamond IV",
            image: "/assets/images/testimonial-2.jpg"
        },
        {
            text: "As a casual player, I never thought I'd improve much, but the personalized coaching made it easy to focus on what matters. Now my friends ask ME for advice!",
            author: "Michael T.",
            rank: "Gold III",
            image: "/assets/images/testimonial-3.jpg"
        }
    ];

    return (
        <>
            <Hero />
            <StatsSection>
                <StatsContainer>
                    <StatCard>
                        <StatIcon bg="var(--primary)" shadow="rgba(10, 132, 255, 0.2)">
                            <FaUsers />
                        </StatIcon>
                        <StatNumber gradient="linear-gradient(90deg, var(--primary), #0063cc)">10K+</StatNumber>
                        <StatTitle>Active Users</StatTitle>
                    </StatCard>
                    <StatCard>
                        <StatIcon bg="var(--accent)" shadow="rgba(200, 155, 60, 0.2)">
                            <FaMedal />
                        </StatIcon>
                        <StatNumber gradient="linear-gradient(90deg, var(--accent), #a17d33)">92%</StatNumber>
                        <StatTitle>Improved Win Rate</StatTitle>
                    </StatCard>
                    <StatCard>
                        <StatIcon bg="#4caf50" shadow="rgba(76, 175, 80, 0.2)">
                            <FaCheck />
                        </StatIcon>
                        <StatNumber gradient="linear-gradient(90deg, #4caf50, #2e7d32)">500+</StatNumber>
                        <StatTitle>Training Exercises</StatTitle>
                    </StatCard>
                    <StatCard>
                        <StatIcon bg="#9c27b0" shadow="rgba(156, 39, 176, 0.2)">
                            <FaComments />
                        </StatIcon>
                        <StatNumber gradient="linear-gradient(90deg, #9c27b0, #6a1b9a)">24/7</StatNumber>
                        <StatTitle>Coach Support</StatTitle>
                    </StatCard>
                </StatsContainer>
            </StatsSection>
            <Features />
            <TestimonialsSection>
                <SectionTitle>What Our Users Say</SectionTitle>
                <TestimonialsContainer>
                    <TestimonialGrid>
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index}>
                                <TestimonialText>{testimonial.text}</TestimonialText>
                                <TestimonialAuthor>
                                    <AuthorImage>
                                        <img src={testimonial.image} alt={testimonial.author} />
                                    </AuthorImage>
                                    <AuthorInfo>
                                        <AuthorName>{testimonial.author}</AuthorName>
                                        <AuthorRank>{testimonial.rank}</AuthorRank>
                                    </AuthorInfo>
                                </TestimonialAuthor>
                            </TestimonialCard>
                        ))}
                    </TestimonialGrid>
                </TestimonialsContainer>
            </TestimonialsSection>
            <CallToAction />
        </>
    );
};

export default Home;