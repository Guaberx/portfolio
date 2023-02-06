import React from 'react'
import { Button } from '../Components/Button'
import { Container, ContainerMain, ContainerNavbarContentFooter } from '../Components/Container'
import { Footer } from '../Components/Footer'
import { Form } from '../Components/Form'
import { Navbar } from '../Components/Narvar'
import { SubTitle } from '../Components/TextField/SubTitle'
import { TextField } from '../Components/TextField/TextField'
import { Title } from '../Components/TextField/Title'
export const DebugLayout = () => {
  const containers = <ContainerMain>
    <Title>
      Titulo Title
    </Title>
    <SubTitle>
      Subtitulo
    </SubTitle>
    <TextField>
      whatever
    </TextField>
    <TextField>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda id esse non rerum dignissimos similique ipsa repudiandae ex maxime consequuntur doloremque sequi, totam, laboriosam pariatur dicta aut culpa nobis.
    </TextField>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus fugit culpa minus, rem eius sed ratione quisquam eos, dolorum neque voluptatum eligendi aliquam suscipit illo. Autem alias eligendi veritatis!</p>
    <Container>
      <TextField>
        whatever
      </TextField>
      <TextField>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda id esse non rerum dignissimos similique ipsa repudiandae ex maxime consequuntur doloremque sequi, totam, laboriosam pariatur dicta aut culpa nobis.
      </TextField>
    </Container>
  </ContainerMain>

  return (
    <ContainerNavbarContentFooter>
      <Navbar style={{ textAlign: "center" }}>
        <h1>Juan Fernando Otoya</h1>
        <p>test</p>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </Navbar>
      <div>Content</div>
      <Footer>
        {/* {tmpCard} */}
        {/* mailto:johndoe@email.com tel:555-555-5555 */}
        <Form
          id="contact"
          onSubmit={()=>{}}
          title="Let's Connect"
        // description="I would love to hear from you! Whether you have a question, a project idea, or just want to say hi, please fill out the form below and I'll get back to you as soon as possible."
        >
          <input name="email" type="email" placeholder="Youremail@example.com" />
          <input name="subject" type="subject" placeholder="Subject..." />
          <textarea name="message" placeholder="Your message..." />
        </Form>
        {/* {tmpCard} */}
      </Footer>
    </ContainerNavbarContentFooter>

  )
}

