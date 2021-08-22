import React from 'react'
import styled from 'styled-components'
import { containerPadding, getClickableLinkStyle } from '../../utils/styleUtils'
import MobileNavbar from '../MobileNavbar'
import { Link } from 'react-router-dom'
const StyledNavbar = styled.nav`
  user-select: none;
  background-color: white;
  z-index: 900;
  height: 4rem;
  display: flex;
  ${(props) => containerPadding(props.isMobile)}
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
`
const LogoText = styled(Link)`
  color: black;
  margin: auto 0;
  font-weight: 400 !important;
  cursor: pointer;
  font-family: 'DM Serif Text';
  font-size: 2rem !important;
  white-space: nowrap;
  align-self: center;
  &:hover {
    color: black;
  }
`

const Menu = styled.ul`
  list-style-type: none;
  color: #3355ff;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`

const MenuItem = styled(Link)`
  font-size: 1.2rem;
  color: #3355ff;
  cursor: pointer;
  margin-left: 3rem;
  ${getClickableLinkStyle()}
  &:hover {
    color: #3355ff;
  }
`

const Navbar = ({ isMobile }) => {
  return (
    <StyledNavbar isMobile={isMobile}>
      <LogoText to='/'>Ali Arslan</LogoText>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <Menu>
          <MenuItem to='/blog'>Blog</MenuItem>
          <MenuItem to='/project'>Project</MenuItem>
          <MenuItem to='/about'>About</MenuItem>
          <MenuItem to='/contact'>Contact</MenuItem>
        </Menu>
      )}
    </StyledNavbar>
  )
}

export default Navbar