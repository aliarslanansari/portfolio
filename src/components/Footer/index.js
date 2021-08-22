import styled from 'styled-components'
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub'
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin'
import { AiFillTwitterCircle } from '@react-icons/all-files/ai/AiFillTwitterCircle'
import { MdEmail } from '@react-icons/all-files/md/MdEmail'

const CustomFooter = styled.footer`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 1rem 0;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 100%;
`

const Footer = () => {
  return (
    <CustomFooter>
      <a
        href='https://github.com/aliarslanansari'
        target='_blank'
        rel='noreferrer'>
        <AiFillGithub size='1.5rem' />
      </a>
      <a
        href='https://www.linkedin.com/in/aliarsalanansari/'
        target='_blank'
        rel='noreferrer'>
        <AiFillLinkedin size='1.5rem' />
      </a>
      <a
        href='https://twitter.com/aliarslanansari'
        target='_blank'
        rel='noreferrer'>
        <AiFillTwitterCircle size='1.5rem' />
      </a>
      <a href='mailto:aliarslan1620@gmail.com' target='_blank' rel='noreferrer'>
        <MdEmail size='1.5rem' />
      </a>
    </CustomFooter>
  )
}

export default Footer
