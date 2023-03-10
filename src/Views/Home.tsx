import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Background } from "../Components/Background";
import { Button } from "../Components/Button";
import { Card } from "../Components/Card";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Narvar";
import { TextTitleField } from "../Components/TextField";
import {
  Container,
  ContainerMain,
  ContainerDynamic,
  ContainerNavbarContentFooter,
} from "../Components/Container";

import { Title } from "../Components/TextField/Title";
import { TextField } from "../Components/TextField/TextField";
import { Label } from "../Components/Label";

import juanfer from "../Assets/Profile cropped green.png";
import logo from "../Assets/Guaberx_Logo_No_Background.png";

import { ContainerColumns } from "../Components/Container/ContainerColumns";
import { SubTitle } from "../Components/TextField/SubTitle";
import { ListNumbered } from "../Components/List";

interface ISkills {
  [key: string]: string[];
}

const Home = () => {
  const tmpCard = (
    <Card
      // src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg"
      src={juanfer}
      alt={"Forest Image"}
      style={{ width: "15rem" }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
      quibusdam dolore exercitationem tenetur dolor nesciunt eos ad assumenda
      sint repellendus fugit, perferendis non. Ullam dicta quod sit explicabo
      provident facere.
    </Card>
  );

  const skills: ISkills = {
    Languages: ["NodeJS", "Typescript", "Python", "Bash"],
    Databases: [
      "SQL",
      "NoSQL",
      "Postgres",
      "MariaDB",
      "MongoDB",
      "Neo4j",
      "Redis",
    ],
    "Cloud Tecnologies": ["AWS", "Azure", "Docker", "Jenkins", "CI", "CD"],
    "Soft Skills": [
      "Agile Development",
      "Teamwork",
      "Confidence",
      "Flexibility",
      "Communication Skills",
      "Problem Solving",
    ],
  };

  const maxWidth = 1000;


  return (
    <ContainerMain
      contentMaxWidth={1000}
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", gap: "10rem", marginTop: "5rem" }}
    >
      {/* <img src={logo} style={{ width: "20rem", height: "auto" }}></img> */}

      <ContainerDynamic>
        <Button
          style={{ fontWeight: "bold" }}
          onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              // ???? Will scroll smoothly to the top of the next section
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
              // ???? Will scroll smoothly to the top of the next section
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
              // ???? Will scroll smoothly to the top of the next section
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Work Experience
        </Button>
      </ContainerDynamic>

      <Container>
        <Title style={{ color: "var(--color-ternary-500)" }}>About Me</Title>

        <TextField style={{ textAlign: "justify" }}>
          {`As an experienced and dedicated software developer, I have honed a diverse set of skills through my professional experience in the tech industry. I am a solution-oriented individual who possesses a strong ability to listen and help others. I am passionate about learning and creating clean and well-developed software.`}
        </TextField>
      </Container>

      <Container>
        <Title
          id="skills"
          style={{ marginBottom: "1rem", color: "var(--color-ternary-500)" }}
        >
          Key Skills
        </Title>
        <ContainerDynamic style={{alignItems:"baseline"}}>
          {Object.keys(skills).map((skillTitle) => (
            <Container style={{ minWidth: "300px", gap:0}}>
              <SubTitle style={{alignSelf:"center"}}>{skillTitle}</SubTitle>
              <ListNumbered>
                {skills[skillTitle].map((skill) => (
                  <h3 style={{}}>{skill}</h3>
                ))}
              </ListNumbered>
            </Container>
          ))}
        </ContainerDynamic>
      </Container>

      <ContainerDynamic>
        <Container>
          <Title>Education</Title>
          <TextField>
            {`B.S. in Computer science,
              Pontificia Universidad Javeriana,
              CO, 2023`}
          </TextField>
        </Container>

        <Container>
          <Title style={{}}>Languages</Title>
          <TextField>
            {`English - Fluent
              Spanish - Fluent
              German - Good`}
          </TextField>
        </Container>

        <Container>
          <Title style={{}}>Certificates</Title>
          <TextField>
            {`- AWS Cloud Practitioner
              - AWS Solution Architect
              - Imagine a certificate which comes with a link or something longer
              `}
          </TextField>
        </Container>
      </ContainerDynamic>

      <Container>
        <Title id="work-experience">Work Experience</Title>
        <SubTitle style={{}}>
          {`IBM
          Application Developer | Software Specialist | consultant
          Jan 2022 - Present`}
        </SubTitle>

        <TextField style={{ textAlign: "justify", marginBottom: "5rem" }}>
          {`- Acted as a consultant in the banking industry, creating an MQ (messaging queue) library for the bank and migrating some of their transactions to an MQ schema.

              - Reviewed the current state of an inner project used to manage employees' funds, improving the current code base architecture and fixing some security issues that I identified.

              - Led and helped the team with all the technical doubts they had, providing one-on-one mentoring during sprints to achieve the goals of the project.

              - Developed and integrated an electronic signature with a third-party provider in the employees' fund project.

              - Renewed a web app used to sell services to new clients. Configured a CI/CD pipeline for the app with Jenkins and IBM's GitHub, and improved the app's user interface for better responsiveness.`}
        </TextField>
      </Container>
    </ContainerMain>
  );
};

export default Home;
