import React from 'react'
import styled from 'styled-components'
import { socials } from '../../data'

const Social = () => {
  return (
    <HomeSocial>
      {socials.map((social, index) => (
        <a key={index} href={social.link} className="home__social-icon" target={social.target}>
          {social.icon}
        </a>
      ))}
    </HomeSocial>
  )
}

const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  &-icon {
    font-size: ${({ theme }) => theme?.colors?.title};

    &:hover {
      font-size: ${({ theme }) => theme?.colors?.titleDark};
    }
  }
`

export default Social