import React from 'react';
import styled from 'styled-components';
import DemoPlaceholder from '../components/demo/DemoPlaceholder';

const DemoPageContainer = styled.div`
  padding: 100px 0;
`;

const DemoHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
`;

const DemoTitle = styled.h1`
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

const DemoDescription = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #555;
`;

const DemoContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const DemoPageInfoSection = styled.div`
  background-color: var(--light);
  border-radius: 10px;
  padding: 2rem;
  margin-top: 3rem;
  box-shadow: var(--shadow-small);
`;

const DemoInfoTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--dark);
`;

const DemoInfoText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const DemoInfoList = styled.ul`
  list-style-type: disc;
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const Demo = () => {
  return (
    <DemoPageContainer>
      <DemoHeader>
        <DemoTitle>Try LeagueCoach</DemoTitle>
        <DemoDescription>
          Experience a preview of our app's features with this interactive demo.
          See how LeagueCoach can help you improve your League of Legends gameplay.
        </DemoDescription>
      </DemoHeader>
      
      <DemoContent>
        <DemoPlaceholder />
        
        <DemoPageInfoSection>
          <DemoInfoTitle>What to Expect in the Full App</DemoInfoTitle>
          <DemoInfoText>
            The interactive demo is a simplified version of our full application. 
            The complete LeagueCoach app offers many more features and capabilities:
          </DemoInfoText>
          <DemoInfoList>
            <li>Full integration with Riot API for real-time game data</li>
            <li>Comprehensive performance analytics and personalized recommendations</li>
            <li>Multiple interactive mini-games for skill improvement</li>
            <li>Champion-specific coaching and mastery tracking</li>
            <li>Community features to connect with other players</li>
            <li>Progress tracking and achievement system</li>
          </DemoInfoList>
          <DemoInfoText>
            Sign up to be notified when the full version launches, or follow our development
            updates on social media to see new features as they're announced.
          </DemoInfoText>
        </DemoPageInfoSection>
      </DemoContent>
    </DemoPageContainer>
  );
};

export default Demo;