import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import {
  colors
} from '@/helpers';
import {
  SectionDark,
  SectionSubtitle,
  SectionTitle
} from '@/components/common/UiElements';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false
});

const GrowthCards = ({
  growthData
}) => (
  <SectionDark>
    <SectionTitle>App Metrics</SectionTitle>
    <SectionSubtitle>See How Our App is Making an Impact!</SectionSubtitle>
    <ContentWrapper className="container">
      {growthData.map((item, index) => (
        <Card>
          <Icon src={item.icon} />
          <h2>{item.name}</h2>
          <AnimatedNumbers
            includeComma
            transitions={() => {
              return {
                type: 'spring',
                duration: index + 1,
                delay: 0
              };
            }}
            animateToNumber={item.numbers}
            fontStyle={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              fontWeight: 400
            }}
          />
        </Card>
      ))}
    </ContentWrapper>
  </SectionDark>
);

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

const Card = styled.div`
    border: 1px solid #fff;
    background: #783df6;
    padding: 30px 20px;
    border-radius: 10px;
    color: #fff;
    text-align: center;
    box-shadow: inset 0 0 20px 0 rgba(255,255,255,0.5);

    h2 {
        font-size: 28px;
        padding: 20px 0;
    }

    span {
        div {
            justify-content: center;
        }
    }
`;

const Icon = styled.img`
    height: 60px;
`;

export default GrowthCards;
