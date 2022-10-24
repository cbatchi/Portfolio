import React from "react"
import { ProfilePicture } from "../../assets"
import {
  Container,
  Section,
} from "../../styles/components/components.styled"
import Data from "./Data"
import { HomeContainer, HomeContent, HomeImage, HomeStyled } from "./home.styled"
import Social from "./Social"

const Home = () => {
  return (
    <Section className="home" id="home">
      <HomeContainer grid container>
          <HomeContent grid>
            <Social />
            <HomeImage profilePicture={ProfilePicture} />
            <Data />
          </HomeContent>
      </HomeContainer>
    </Section>
  )
}

export default Home
