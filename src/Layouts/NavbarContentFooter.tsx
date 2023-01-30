import React from "react";
import { Outlet } from "react-router-dom";
import { ContainerNavbarContentFooter } from "../Components/Container";
import { Footer } from "../Views/Footer";
import { Navbar } from "../Views/Navbar";

export const NavbarContentFooter = () => {
  return (
    <ContainerNavbarContentFooter>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </ContainerNavbarContentFooter>
  );
};
