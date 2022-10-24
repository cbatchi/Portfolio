import styled from "styled-components"
import { devices } from "../../styles/themes/theme.styled"

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme?.block?.zIndex.fixed};
  background-color: ${({ theme }) => theme?.colors?.container};

  .nav {
    ${({ theme }) =>
      theme?.block?.height?.header &&
      `height: calc(${theme?.block?.height?.header} + 1.5rem)`};

    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;

    &__logo,
    &__toggle {
      color: ${({ theme }) => theme?.colors?.title};
      font-weight: ${({ theme }) => theme?.font?.weight?.meduim};
    }
    &__list {
      display: flex;
      column-gap: 2rem;
    }

    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: ${({ theme }) => theme?.font?.size?.small};
      font-weight: ${({ theme }) => theme?.font?.weight?.meduim};
      color: ${({ theme }) => theme?.colors?.title};
      text-transform: capitalize;
      transition: 0.3s;

      .active-link,
      &:hover {
        color: ${({ theme }) => theme?.colors?.titleDark};
      }
    }

    &__close,
    &__icon,
    &__toggle {
      display: none;
    }
  }

  /* For meduim devices */
  @media screen and (${devices.md}) {
    top: initial;
    bottom: 0;

    .nav {
      height: ${({ theme }) => theme?.block?.header?.height};

      &__menu {
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        background-color: ${({ theme }) => theme?.colors?.body};
        padding: 2rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: 0.3s;
      }

      &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }

      &__icon {
        font-size: 1.2rem;
      }
      &__close {
        position: absolute;
        right: 1.3rem;
        bottom: 0.5rem;
        font-size: 1.5rem;
        color: ${({ theme }) => theme?.colors?.title};

        &:hover {
          color: ${({ theme }) => theme?.colors?.titleDark};
        }
      }

      &__toggle { font-size: 1.1rem; cursor: pointer; }

      &__icon,
      &__close,
      &__toggle {
        display: block;
      }

      .show-menu {bottom: 0;}
    }
  }

  /* For extra small devices */
  @media screen and (${devices.xs}) {
    .nav {
      &__menu {
        padding: 2rem .25rem 4rem;
      }
      &__list {
        column-gap: 0;
      }
    }
  }
`

export default Header
