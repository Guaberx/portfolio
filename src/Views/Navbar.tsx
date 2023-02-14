import React, { useContext } from "react";

import { Navbar as NavbarComponent } from "../Components/Narvar";

import juanfer from "../Assets/Profile cropped green.png";
import logo from "../Assets/logo192.png";
import { Button } from "../Components/Button";
import { ThemeContext } from "../Contexts/ThemeContext";
import { Container, ContainerDynamic } from "../Components/Container";
import { Title } from "../Components/TextField/Title";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

  const { theme, setTheme } = useContext(ThemeContext);
  // const navigate = useNavigate()
  return (
    <NavbarComponent>
      <Link to="/">
        <img
          // src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg"
          src={logo}
          alt={"Forest Image"}
          style={{ borderRadius: "50%" }}
          // onClick={()=>{navigate("/")}}
        ></img>
      </Link>
      <Title>Juan Fernando Otoya</Title>
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
    </NavbarComponent>
  );
};
