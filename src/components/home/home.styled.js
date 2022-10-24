import styled from "styled-components"
import { ProfilePicture } from "../../assets"
import { devices } from "../../styles/themes/theme.styled"

export const HomeContainer = styled.div`
  ${({ grid, container }) =>
    grid && container
      ? `
        max-width: 960px;
        margin: 0 auto;

        @media screen and (${devices.lg}) {
          margin: 0 ${({ theme }) => theme?.block?.margin?.b1_5};
        }

        @media screen and (${devices.xs}) {
          margin: 0 ${({ theme }) => theme?.block?.margin?.b1};
        }
    `
      : `
        max-width: 960px;
        margin: 0 auto;

        @media screen and (${devices.lg}) {
          margin: 0 ${({ theme }) => theme?.block?.margin?.b1_5};
        }

        @media screen and (${devices.xs}) {
          margin: 0 ${({ theme }) => theme?.block?.margin?.b1};
        }`}
`

export const HomeContent = styled.div`
  ${({ grid }) =>
    grid
      ? `
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 116px repeat(2, 1fr);
    padding-top: 5.5rem;
    column-gap: 2rem;
    align-items: center;
  `
      : `
        grid-template-columns: 116px repeat(2, 1fr);
    padding-top: 5.5rem;
    column-gap: 2rem;
    align-items: center;
  `}
`

export const HomeImage = styled.div`
  ${({ profilePicture }) =>
    ProfilePicture
      ? `
        background: url(${ProfilePicture});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
        box-shadow: inset 0 0 0 9px rgb(255 255 255/30%);
        order: 1;
        justify-self: center;
        animation: profile_animate 7s ease-in-out infinite 1s;


        @keyframes profile_animate {
          0% {
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
          }
        }
    
    `
      : null};
`
