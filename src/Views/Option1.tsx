import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  createElement,
} from "react";
import {
  Outlet,
  useNavigate,
  Link,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { Background } from "../Components/Background";
import { Button } from "../Components/Button";
import { Card } from "../Components/Card";
import { Container, ContainerDynamic } from "../Components/Container";
import { Footer } from "../Components/Footer";
import { Label } from "../Components/Label";
import { ListNumbered } from "../Components/List";
import { Navbar } from "../Components/Narvar";
import { TextTitleField } from "../Components/TextField";
import { SubTitle } from "../Components/TextField/SubTitle";
import { TextField } from "../Components/TextField/TextField";
import { Title } from "../Components/TextField/Title";

function parseHtmlString(htmlString: any) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const children = Array.from(doc.body.children);
  return children.map((child, index) =>
    createElement(child.tagName.toLowerCase(), {
      key: index,
      dangerouslySetInnerHTML: { __html: child.innerHTML },
    })
  );
}

function ExternalPage({ url }: any) {
  const [html, setHtml] = useState<any>(null);
  const [html0, setHtml0] = useState<any>(null);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: new Headers({ "Content-type": "text/html" }),
      mode: "no-cors", // <---
      // cache: "default",
    })
      .then((response) => response.text())
      .then((html) => {
        const match = /<body.*?>([\s\S]*)<\/body>/.exec(html);
        const bodyHtml = match ? match[1] : "";
        console.log(bodyHtml);
        setHtml0(bodyHtml);
        setHtml(parseHtmlString(html));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <>
      <h1>DOING EXTERNAL HTML</h1>
      {html}
      <div dangerouslySetInnerHTML={{ __html: `<div>${html0}</div>` }}></div>
      {/* <div dangerouslySetInnerHTML={{ __html: html }} />; */}
    </>
  );
}

const Option1 = () => {
  const navigate = useNavigate();
  const tmpCard = (
    <Card
      src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg"
      alt={"Forest Image"}
      style={{ width: "15rem" }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
      quibusdam dolore exercitationem tenetur dolor nesciunt eos ad assumenda
      sint repellendus fugit, perferendis non. Ullam dicta quod sit explicabo
      provident facere.
    </Card>
  );

  const params: any = useParams();

  useEffect(() => {
    console.log("params:", params);
  }, []);
  return (
    <>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/o">O</Link>
        <Link to="/yes">yes</Link>
        <Link to="/no">no</Link>
        <a href="https://themoviedbproject.web.app/">no</a>
      </Navbar>
      <h1>TRYING</h1>
      {/* <ExternalPage url="http://localhost:3000/o" /> */}
      <aside>
        <ListNumbered>
          <a href="">test</a>
          <p>ptest</p>
          <h1>h1test</h1>
          <Button>ButtonTest</Button>
          <Title>Title test</Title>
          <SubTitle>SubTitle test</SubTitle>
          <TextField>TextField Test</TextField>
          <Label>Label Test</Label>
        </ListNumbered>
      </aside>
      <iframe
        style={{ border: 0,
          width: '700px',
          height: "100vh",
          display: "block",
          overflow: 'hidden',
         }}
        height="100%"
        scrolling="no"
        src="https://themoviedbproject.web.app/"
      ></iframe>

      {/* <p>Params: {''+params}</p> */}
      {/* <Container>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        quibusdam dolore exercitationem tenetur dolor nesciunt eos ad assumenda
        sint repellendus fugit, perferendis non. Ullam dicta quod sit explicabo
        provident facere.
      </Container>
      <Container>
        <ContainerDynamic>
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        quibusdam dolore exercitationem tenetur dolor nesciunt eos ad assumenda
        sint repellendus fugit, perferendis non. Ullam dicta quod sit explicabo
        provident facere.`}
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        quibusdam dolore exercitationem tenetur dolor nesciunt eos ad assumenda
        sint repellendus fugit, perferendis non. Ullam dicta quod sit explicabo
        provident facere.`}
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        quibusdam dolore exercitationem tenetur dolor nesciunt eos ad assumenda
        sint repellendus fugit, perferendis non. Ullam dicta quod sit explicabo
        provident facere.`}
        </ContainerDynamic>
      </Container>
      <ContainerDynamic>
        {tmpCard} {tmpCard} {tmpCard}
      </ContainerDynamic> */}
      <Outlet></Outlet>
    </>
  );
};

export default Option1;
