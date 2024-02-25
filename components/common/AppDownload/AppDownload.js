import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';

const AppDownload = () => (
  <Wrapper id="download-app" className="container">
    <Content>
      <Overview>
        <h3>Get Acme Notes App</h3>
        <Ratings>
          <StarsWrapper>
            <StarIcon src="/assets/icons/star-filled.png" />
            <StarIcon src="/assets/icons/star-filled.png" />
            <StarIcon src="/assets/icons/star-filled.png" />
            <StarIcon src="/assets/icons/star-filled.png" />
            <StarIcon src="/assets/icons/star-filled-half.png" />
          </StarsWrapper>
          <span>4.5</span>
          <Dot />
          <span>9,00,000 +  Downloads</span>
        </Ratings>
        <AppdownloadIcons>
          <a href="#">
            <Icon src="/assets/icons/google-play-icon.svg" />
          </a>
          <a href="#">
            <Icon src="/assets/icons/app-store-icon.svg" />
          </a>
        </AppdownloadIcons>
        <TryNowBtn href="#" className="btn-primary">
          Try Now
        </TryNowBtn>
      </Overview>
      <AppImgWrapper>
        <img className="move-img" src="/assets/images/app-download-image.png" alt="app-img" />
      </AppImgWrapper>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
    margin-top: 220px;
    margin-bottom: 130px;
    background: linear-gradient(to left, rgb(238, 231, 254), rgb(251, 245, 239));
    border-radius: 20px;
`;

const Content = styled.div`
    padding: 50px 100px;
    display: flex;
    min-height: 350px;

    > div {
      flex: 1;
    }

    h3 {
        font-family: martel;
        font-size: 42px;
    }
`;

const Overview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const AppdownloadIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 30px 0 0;
`;

const Icon = styled.img`
    height: 60px;
    cursor: pointer;
`;

const Ratings = styled.div`
    display: flex;
    align-items: center;
`;

const StarsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`;

const StarIcon = styled.img`
    height: 22px;
`;

const Dot = styled.span`
    display: block;
    height: 5px;
    width: 5px;
    border-radius: 10px;
    background-color: ${colors.HanPurple};
    opacity: 0.5;
    margin: 0 20px;
`;

const TryNowBtn = styled.button`
    margin-top: auto;
    font-size: 17px;
    font-weight: 500;
`;

const AppImgWrapper = styled.div`
  position: relative;
  text-align: center;

  img {
    position: absolute;
    width: 300px;
    bottom: -120px;
    right: 60px;
  }
`;

export default AppDownload;
