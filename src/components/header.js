import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components';
import avatar from './avatar_512.png';

const HeaderContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.45rem;
`;

const Logo = styled.img`
  margin: 0px;
  padding: 0px;
  height: auto;
  width: auto;
  max-width: 140px;
  max-height: auto;
`;

const SiteTitle = styled.h1`
  margin: 0px;
  font-weight: bold;
  font-size: 28px;
`;

const StyledLink = styled(Link)`
  color: rgba(0,0,0,0.8);
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div className='row center-xs'>
      <div className="col-xs">
          <Logo src={avatar} alt="Logo" />
          <SiteTitle>
            <StyledLink to="/">{siteTitle}</StyledLink>
          </SiteTitle>
      </div>
    </div>
  </HeaderContainer>
)

export default Header
