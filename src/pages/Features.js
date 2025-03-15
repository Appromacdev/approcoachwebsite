import React from 'react';
import styled from 'styled-components';
import FeatureCard from '../components/features/FeatureCard';

const FeaturesPageContainer = styled.div`
  padding: 100px 0;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
`;

const PageTitle = styled.h1`
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

const PageDescription = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #555;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SectionTitle = styled.h2`
  margin: 3rem 0 2rem;
  text-align: center;
  grid-column: 1 / -1;
  color: var(--dark);
`;

const Features = () => {
  // Sample feature data
  const coreFeatures = [
    {
      title: 'Performance Analytics',
      description: 'Deep dive into your game performance with detailed statistical analysis, including win rates, KDA, CS, vision score, and much more.',
      image: '/assets/images/analytics.jpg',
      tags: ['Stats', 'Analysis'],
      tagColors: ['var(--primary)', 'var(--secondary)'],
      buttonText: 'Learn More',
      buttonLink: '#analytics'
    },
    {
      title: 'Personalized Coaching',
      description: 'Receive tailored advice and tips based on your actual gameplay. Our AI analyzes your strengths and weaknesses to provide actionable guidance.',
      image: '/assets/images/coaching.jpg',
      tags: ['AI', 'Coaching'],
      tagColors: ['var(--accent)', 'var(--primary)'],
      buttonText: 'Learn More',
      buttonLink: '#coaching'
    },
    {
      title: 'Champion Mastery Tracking',
      description: 'Track your progress with specific champions, comparing your performance against average stats for your rank and identifying areas for improvement.',
      image: '/assets/images/champions.jpg',
      tags: ['Champions', 'Tracking'],
      tagColors: ['var(--secondary)', 'var(--primary)'],
      buttonText: 'Learn More',
      buttonLink: '#champions'
    }
  ];
  
  const gameFeatures = [
    {
      title: 'Last Hit Trainer',
      description: 'Improve your CS skills with our interactive mini-game designed to help you perfect the timing for last hitting minions across different champions.',
      image: '/assets/images/last-hit.jpg',
      tags: ['Mini-Game', 'CS Skills'],
      tagColors: ['var(--accent)', 'var(--primary)'],
      buttonText: 'Learn More',
      buttonLink: '#last-hit'
    },
    {
      title: 'Map Awareness Challenge',
      description: 'Enhance your map awareness with our real-time challenge that tests how quickly you can spot ganks, objectives, and team positioning.',
      image: '/assets/images/map-awareness.jpg',
      tags: ['Mini-Game', 'Awareness'],
      tagColors: ['var(--accent)', 'var(--secondary)'],
      buttonText: 'Learn More',
      buttonLink: '#map-awareness'
    },
    {
      title: 'Team Fight Simulator',
      description: 'Practice positioning and target prioritization in simulated team fights based on real game scenarios and champion matchups.',
      image: '/assets/images/teamfight.jpg',
      tags: ['Mini-Game', 'Teamfights'],
      tagColors: ['var(--accent)', 'var(--primary)'],
      buttonText: 'Learn More',
      buttonLink: '#teamfight'
    }
  ];

  return (
    <FeaturesPageContainer>
      <PageHeader>
        <PageTitle>App Features</PageTitle>
        <PageDescription>
          Explore all the tools and features designed to help you master League of Legends
          and climb the ranked ladder with confidence.
        </PageDescription>
      </PageHeader>
      
      <FeaturesGrid>
        <SectionTitle>Core Features</SectionTitle>
        {coreFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
        
        <SectionTitle>Interactive Training</SectionTitle>
        {gameFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </FeaturesGrid>
    </FeaturesPageContainer>
  );
};

export default Features;