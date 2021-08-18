import React from 'react'
import styled from 'styled-components'
import { getClickableLinkStyle } from '../../utils/styleUtils'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  transform: ${({ open }) => (open ? 'scaleX(100%)' : 'scaleX(0)')};
  height: 100vh;
  width: 15rem;
  text-align: right;
  padding: 0 2rem 0 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
    padding: 0;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const MenuItem = styled.li`
  font-size: 1.5rem;
  color: #3355ff;
  margin: 1rem 5rem;
  ${getClickableLinkStyle()}
  @media (max-width: 576px) {
    /* text-align: center; */
  }
`
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <MenuItem href='/'>Blog</MenuItem>
      <MenuItem href='/'>Project</MenuItem>
      <MenuItem href='/'>About</MenuItem>
      <MenuItem href='/'>Contact</MenuItem>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? 'black' : 'black')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const MobileNavbar = ({ navigationMenuOptions }) => {
  const [open, setOpen] = React.useState(false)

  //   const currentURL = useLocation()
  //   const history = useHistory()

  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </>
  )
}

export default MobileNavbar
