// @ts-nocheck
import React from "react"
import UilEstate from "@iconscout/react-unicons/icons/uil-estate"
import UilUser from "@iconscout/react-unicons/icons/uil-user"
import UilFileAlt from "@iconscout/react-unicons/icons/uil-file-alt"
import UilBriefCaseAlt from "@iconscout/react-unicons/icons/uil-briefcase-alt"
import UilScenery from "@iconscout/react-unicons/icons/uil-scenery"
import UilMessage from "@iconscout/react-unicons/icons/uil-message"
import UilTimes from "@iconscout/react-unicons/icons/uil-times"
import UilApps from "@iconscout/react-unicons/icons/uil-apps"
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram"
import UilDribble from "@iconscout/react-unicons/icons/uil-dribbble"
import UilGithubAlt from "@iconscout/react-unicons/icons/uil-github-alt"

export const navItems = [
  {
    name: "acceuil",
    icon: <UilEstate className="nav__icon" />,
    target: "#home",
  },
  {
    name: "a propos",
    icon: <UilUser className="nav__icon" />,
    target: "#about",
  },
  {
    name: "compétences",
    icon: <UilFileAlt className="nav__icon" />,
    target: "#skills",
  },
  {
    name: "services",
    icon: <UilBriefCaseAlt className="nav__icon" />,
    target: "#services",
  },
  {
    name: "portfolio",
    icon: <UilScenery className="nav__icon" />,
    target: "#portfolio",
  },
  {
    name: "contact",
    icon: <UilMessage className="nav__icon" />,
    target: "#contact",
  },
]


export const socials = [
  {
    name: "dribble",
    icon: <UilDribble />,
    link: "https://www.https://dribbble.com",
    target: "_blank",
  },
  {
    name: "instagram",
    icon: <UilInstagram />,
    link: "https://www.instagram.com/",
    target: "_blank",
  },
  {
    name: "github",
    icon: <UilGithubAlt />,
    link: "https://https://www.github.com/",
    target: "_blank",
  },
];

export const icons = { UilTimes, UilApps }
