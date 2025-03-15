import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const AboutContainer = styled.div`
  padding: 100px 0;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
`;

const AboutTitle = styled.h1`
  margin-bottom: 1.5rem;
  color: var(--dark);
  position: relative;
  display: inline-block;
  padding-bottom: 15px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--accent);
  }
`;

const AboutDescription = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #555;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Section = styled.section`
  display: flex;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const SectionImage = styled.div`
  flex: 1;
  min-width: 300px;
  
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: var(--shadow-medium);
  }
`;

const SectionContent = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--dark);
  position: relative;
  padding-bottom: 15px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--accent);
  }
`;

const SectionText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
  color: #444;
`;

// Team Section Styles
const TeamSection = styled.section`
  margin-top: 5rem;
`;

const TeamTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: var(--dark);
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--accent);
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  border: 5px solid var(--light);
  box-shadow: var(--shadow-small);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--dark);
`;

const MemberRole = styled.p`
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #555;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: var(--primary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--accent);
    transform: translateY(-3px);
  }
`;

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      bio: 'Passionate League player with 8+ years of experience and a background in mobile app development.',
      image: '/assets/images/team-1.jpg',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'UX/UI Designer',
      bio: 'Diamond-ranked player who combines her gaming knowledge with expert design skills.',
      image: '/assets/images/team-2.jpg',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Marcus Lee',
      role: 'Game Analyst',
      bio: 'Former semi-pro player who specializes in game mechanics and strategy development.',
      image: '/assets/images/team-3.jpg',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Emma Rodriguez',
      role: 'Community Manager',
      bio: 'Content creator and streamer who helps build and nurture our growing community.',
      image: '/assets/images/team-4.jpg',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>About LeagueCoach</AboutTitle>
        <AboutDescription>
          Learn about our mission to help League of Legends players improve their skills
          and climb the ranked ladder through personalized coaching and analytics.
        </AboutDescription>
      </AboutHeader>
      
      <AboutContent>
        <Section>
          <SectionImage>
            <img src="/assets/images/about-1.jpg" alt="Our Mission" />
          </SectionImage>
          <SectionContent>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionText>
              We created LeagueCoach with a simple goal in mind: to help every League of Legends
              player reach their full potential. We believe that with the right guidance and tools,
              anyone can improve their gameplay and climb the ranked ladder.
            </SectionText>
            <SectionText>
              Our app combines advanced analytics, personalized coaching, and interactive
              training games to provide a comprehensive learning experience for players of all skill levels.
            </SectionText>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionImage>
            <img src="/assets/images/about-2.jpg" alt="Our Approach" />
          </SectionImage>
          <SectionContent>
            <SectionTitle>Our Approach</SectionTitle>
            <SectionText>
              LeagueCoach uses a data-driven approach to player improvement. By analyzing your
              game history and performance metrics, we identify specific areas where you can improve
              and provide targeted recommendations and training exercises.
            </SectionText>
            <SectionText>
              We don't believe in generic advice. Every player is unique, with different strengths,
              weaknesses, and playstyles. That's why our coaching is always personalized to your
              individual needs and goals.
            </SectionText>
          </SectionContent>
        </Section>
        
        <TeamSection>
          <TeamTitle>Meet Our Team</TeamTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember key={index}>
                <MemberImage>
                  <img src={member.image} alt={member.name} />
                </MemberImage>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
                <SocialLinks>
                  <SocialLink href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </SocialLink>
                  <SocialLink href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </SocialLink>
                </SocialLinks>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;