// @ts-nocheck
import styled from "styled-components"
import { devices } from "../themes/theme.styled";

export const Section = styled.section`
  padding: 6rem 0 2rem;
`;

export const SectionTitle = styled.h1`
  font-size: ${({ theme }) => theme?.font?.size?.h1};
  color: ${({ theme }) => theme?.colors?.title};
  text-align: center;
`;

export const SectionSubtitle = styled.h2`
  display: block;
  font-size: ${({ theme }) => theme?.font?.size?.small};
  margin-bottom: 4rem;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  @media screen and (${devices.lg}) {
    margin: 0 ${({ theme }) => theme?.block?.margin?.b1_5};
  }

  @media screen and (${devices.xs}) {
    margin: 0 ${({ theme }) => theme?.block?.margin?.b1};
  }
`

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const Button = styled.a`
  display: ${({ flex }) => (flex ? `inline-flex` : `inline-block`)};
  align-items: ${({ flex }) => (flex ? `center` : `stretch`)};
  background-color: ${({ theme }) => theme?.colors?.title};
  color: ${({ theme }) => theme?.colors?.container};
  padding: 1.25rem 2rem;
  border-radius: 1rem;
  font-weight: ${({ theme }) => theme?.font?.weight?.meduim};

  &:hover {
    background-color: ${({ theme }) => theme?.colors?.titleDark};
  }
`

export const ButtonIcon = styled.button`

`;





