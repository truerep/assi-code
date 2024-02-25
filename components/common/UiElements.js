import styled from 'styled-components';
import {
  colors
} from '@/helpers';

const SectionDark = styled.div`
    position: relative;
    padding: 60px 0 80px;
    background-color: ${colors.HanPurple};
    overflow: hidden;

    &::before, &::after {
        content: "";
        position: absolute;
        display: block;
        top: -70px;
        left: -70px;
        height: 200px;
        width: 200px;
        border-radius: 100%;
        background: transparent;
        border: 50px solid #fff;
        opacity: 0.05;
        pointer-events: none;
    }

    &::after {
        top: unset;
        left: unset;
        bottom: -140px;
        right: -140px;
        height: 300px;
        width: 300px;
    }
`;

const SectionTitle = styled.h2`
    color: #fff;
    font-size: 42px;
    text-align: center;
    padding-bottom: 10px;
    font-family: 'Martel';
`;

const SectionSubtitle = styled.h3`
    color: #fff;
    font-size: 16px;
    text-align: center;
    padding-bottom: 40px;
    opacity: 0.9;
`;

export {
  SectionDark,
  SectionTitle,
  SectionSubtitle
};
