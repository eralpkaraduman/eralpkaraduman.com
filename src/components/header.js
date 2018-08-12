import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import logoImage from './logo.png';

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
          <Logo src={logoImage} alt="Logo" />
          <SiteTitle>
            <StyledLink to="/">{siteTitle}</StyledLink>
          </SiteTitle>
      </div>
    </div>
    {/* <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </HeaderContainer>
)

export default Header
