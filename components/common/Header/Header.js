import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';

const Header = ({
  navMenu,
  toggleNav,
  setToggleNav
}) => {
  const LogoUrl = 'https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=ais';
  const hamburgerIcon = 'https://ik.imagekit.io/sahildhingra/hamburger-dark.png';

  return (
    <HeaderWrapper>
      <LogoWrapper className="d-flex align-center">
        <Logo src={LogoUrl} alt="Acme Notes" />
        <ProductName>| Note</ProductName>
      </LogoWrapper>
      <Nav className={toggleNav ? 'toggled' : ''}>
        {
            navMenu && navMenu.map((menuItem) => (
              <Item>
                <Link href={menuItem?.url}>
                  {menuItem?.name}
                </Link>
              </Item>
            ))
        }
      </Nav>
      <DownloadAppBtn href="#download-app" className="btn-primary btn-outlined">
        Download App
      </DownloadAppBtn>

      <NavButton onClick={() => setToggleNav(!toggleNav)}>
        <img src={hamburgerIcon} alt="menu" />
      </NavButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const LogoWrapper = styled.div`
    z-index: 9;
`;

const Logo = styled.img`
    height: 50px;
    transform: translateY(-4px);
`;

const ProductName = styled.h1`
    font-size: 22px;
    padding-left: 5px;
    font-family: martel;
    font-weight: 600;
`;

const NavButton = styled.button`
    border: 0;
    background: transparent;
    display: none;
    z-index: 9;

    img {
        height: 22px;
    }

    @media (max-width: 768px) {
        display: block;
    }
`;

const Nav = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
        position: fixed;
        flex-direction: column;
        background: #fff;
        height: 100vh;
        width: 100vw;
        top: 0;
        right: 0;
        z-index: 8;
        align-items: flex-start;
        padding-top: 60px;

        a {
            padding: 10px 20px!important;
        }

        &.toggled {
            display: flex;
        }
    }
`;

const Item = styled.li`
    a {
        display: block;
        padding: 20px 20px;
        color: #351C42;
        font-size: 16px;
        font-weight: 500;

        &:hover, &.active {
            color: ${colors.HanPurple};
        }
    }
`;

const DownloadAppBtn = styled.a`
    font-size: 17px;
    font-weight: 500;
`;

export default Header;
