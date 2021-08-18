import React from 'react'
import styled from 'styled-components'
import { getClickableLinkStyle } from '../../utils/styleUtils'
import MobileNavbar from '../MobileNavbar'
import { useMediaQuery } from 'react-responsive'

const StyledNavbar = styled.nav`
  user-select: none;
  background-color: white;
  height: 4rem;
  display: flex;
  padding: 0 5rem 0 5rem;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
`
const LogoText = styled.h1`
  font-weight: 400;
  cursor: pointer;
  font-family: 'DM Serif Text';
  font-size: 2rem;
  white-space: nowrap;
`

const Menu = styled.ul`
  list-style-type: none;
  color: #3355ff;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`

const MenuItem = styled.li`
  font-size: 1.2rem;
  color: #3355ff;
  cursor: pointer;
  margin-left: 3rem;
  ${getClickableLinkStyle()}
`

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 700 })
  return (
    <StyledNavbar>
      <LogoText>Ali Arslan</LogoText>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <Menu>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Project</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      )}
    </StyledNavbar>
  )
}

export default Navbar
