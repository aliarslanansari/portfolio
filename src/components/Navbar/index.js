import React from 'react'
import styled from 'styled-components'
import { containerPadding, getClickableLinkStyle } from '../../utils/styleUtils'
import MobileNavbar from '../MobileNavbar'
import { Typography } from 'antd'

const { Title } = Typography

const StyledNavbar = styled.nav`
  user-select: none;
  background-color: white;
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
const LogoText = styled(Title)`
  margin: auto 0;
  font-weight: 400 !important;
  cursor: pointer;
  font-family: 'DM Serif Text';
  font-size: 2rem !important;
  white-space: nowrap;
  align-self: center;
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

const Navbar = ({ isMobile }) => {
  return (
    <StyledNavbar isMobile={isMobile}>
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
