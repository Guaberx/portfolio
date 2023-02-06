import React, { useContext } from "react";

import { Navbar as NavbarComponent } from "../Components/Narvar";

import juanfer from "../Assets/Profile cropped green.png";
import logo from "../Assets/logo192.png";
import { Button } from "../Components/Button";
import { ThemeContext } from "../Contexts/ThemeContext";
import { Container, ContainerDynamic } from "../Components/Container";

export const Navbar = () => {

  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <NavbarComponent>
      <img
        // src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg"
        src={logo}
        alt={"Forest Image"}
        style={{ borderRadius: "50%" }}
      ></img>
      <h1>Juan Fernando Otoya</h1>
      <Button
        onClick={() => {
          switch (theme) {
            case "dark":
              setTheme("light");
              break;
            case "light":
              setTheme("otro");
              break;
              case "otro":
                setTheme("dark");
                break;
            default:
              break;
          }
        }}
      >
        {theme}
      </Button>
      <ContainerDynamic >
        <Button
          style={{ fontWeight: "bold" }}
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              // 👇 Will scroll smoothly to the top of the next section
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact me
        </Button>

        <Button
          style={{ fontWeight: "bold" }}
          onClick={() => {
            const element = document.getElementById("skills");
            if (element) {
              // 👇 Will scroll smoothly to the top of the next section
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Skills
        </Button>

        <Button
          style={{ fontWeight: "bold" }}
          onClick={() => {
            const element = document.getElementById("work-experience");
            if (element) {
              // 👇 Will scroll smoothly to the top of the next section
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Work Experience
        </Button>
      </ContainerDynamic>
    </NavbarComponent>
  );
};
