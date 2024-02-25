import React from 'react';
import styled from 'styled-components';

const HeroBanner = () => (
  <Section>
    <Wrapper className="container">
      <Container className="align-center">
        <Content>
          <Tagline>Unleash Your Thoughts</Tagline>
          <InfoLine>
            Capture thoughts effortlessly, organize seamlessly: your notes, your way.
          </InfoLine>
          <ActionLinks className="d-flex align-center">
            <button className="btn-primary">
              Get Started
            </button>
            <a href="#features">Know more</a>
          </ActionLinks>
        </Content>
        <BannerImg>
          <img className="move-img" src="/assets/images/app-download-image.png" alt="app-img" />
          <img className="move-img" src="/assets/images/app-banner-image.png" alt="app-img" />
        </BannerImg>
      </Container>
    </Wrapper>
  </Section>
);

const Section = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.07;
    z-index: -1;
    background-position: 100px center;
    background-size: contain;
    background-image: url("/assets/images/wave-bg.webp");
  }
`;

const Wrapper = styled.div`
  padding: 150px 0 70px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 48% 45%;
  min-height: 570px;
  position: relative;
`;

const Content = styled.div`
  margin-top: -150px;
`;

const Tagline = styled.h2`
  font-size: 48px;
  line-height: 1.4;
`;

const InfoLine = styled.p`
  max-width: 360px;
  padding: 20px 0 30px;
  font-size: 19px;
  line-height: 1.6;
`;

const BannerImg = styled.div`
  display: flex;
  align-items: center;

  img {
    flex: 1;
    width: 200px;

    &:nth-child(1) {
      animation-delay: 1.5s;
    }
  }
`;

const ActionLinks = styled.div`
  button {
    font-size: 17px;
  }

  a {
    display: inline-block;
    margin-left: 20px;
    font-weight: 500;
  }
`;

export default HeroBanner;
