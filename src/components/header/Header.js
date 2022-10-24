// @ts-nocheck
import React, { useState } from "react"
import { navItems } from "../../data"
import { Container, Grid } from "../../styles/components/components.styled"
import HeaderStyled from "./header.styled"
import { icons as UilIcon } from "../../data"

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenuToggle = () => setMenuToggle(!menuToggle);
  return (
    <HeaderStyled>
      <Container>
        <nav className="nav">
          <a href="index.html" className="nav__logo">
            Claude
          </a>
          <div className={menuToggle ? "nav__menu show-menu" : "nav__menu"}>
            <Grid>
              <ul className="nav__list">
                {navItems?.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item?.target} className="nav__link active-link">
                      {item?.icon}
                      {item?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Grid>
            <UilIcon.UilTimes
              className="nav__close"
              onClick={handleMenuToggle}
            />
          </div>
          <div className="nav__toggle" onClick={handleMenuToggle}>
            <UilIcon.UilApps />
          </div>
        </nav>
      </Container>
    </HeaderStyled>
  )
}

export default Header
