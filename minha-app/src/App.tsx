import {
  ContainerAbout,
  ContainerForm,
  DivAboutMars,
  DivFooterBottom,
  DivFooterMenu,
  DivForm,
  DivImageSmoke,
  DivInputCheckbox,
  DivLogo,
  DivLogoSpaceY,
  DivRocketImage,
  DivSocial,
  FirstTitle,
  GalleryContent,
  IconForm,
  ImageMars,
  InputCheckbox,
  Logo,
  RocketImage,
  SecondSubTitle,
  SectionAbout,
  SectionFooter,
  SectionForm,
  SubtitleForm,
  TextCheckbox,
  TextLogo,
  TextMars,
  TextSubscribe,
  TitleForm,
} from "./styles/styles";

import Button from "./components/Button";
import Container from "./components/Container";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import { ArrowLeft, ArrowRight } from "./components/Gallery/styles";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Home />

      <SectionAbout flex="column">
        <Container width="100%">
          <ContainerAbout
            width="100%"
            alignItems="center"
            justifyContent="center"
          >
            <ImageMars
              whileInView="visible"
              initial="initial"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, x: "-130%" },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, delay: 0.5 },
                },
              }}
            />

            <DivAboutMars
              whileInView="visible"
              initial="initial"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, x: 60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.5 },
                },
              }}
            >
              <FirstTitle>Por que Marte?</FirstTitle>
              <SecondSubTitle>Sobre o planeta vermelho</SecondSubTitle>
              <TextMars>
                A uma distância média de 140 milhões de milhas, Marte é um dos
                vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou
                menos a metade da distância da Terra do Sol, então ainda tem luz
                solar decente. Está um pouco frio, mas podemos esquentar. Sua
                atmosfera é composta principalmente de CO2 com um pouco de
                nitrogênio e argônio e alguns outros oligoelementos, o que
                significa que podemos cultivar plantas em Marte apenas
                comprimindo a atmosfera.
              </TextMars>
              <TextMars>
                A gravidade em Marte é cerca de 38% da da Terra, então você
                seria capaz de levantar coisas pesadas e dar voltas. Além disso,
                o dia está notavelmente próximo ao da Terra.
              </TextMars>
            </DivAboutMars>
          </ContainerAbout>
        </Container>

        <GalleryContent>
          <DivLogo
            whileInView="visible"
            initial="initial"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: 60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1 },
              },
            }}
          >
            <DivLogoSpaceY>
              <Logo />
            </DivLogoSpaceY>

            <TextLogo>
              O caminho para tornar a humanidade multiplanetária<span>.</span>
            </TextLogo>
            <TextSubscribe
              whileInView="visible"
              initial="initial"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 100 },
                visible: {
                  opacity: 1,
                  y: -20,
                  transition: { duration: 1, delay: 1 },
                },
              }}
            >
              Inscreva-se agora
            </TextSubscribe>
          </DivLogo>
          <ArrowLeft />
          <Gallery />
          <ArrowRight />
        </GalleryContent>
      </SectionAbout>

      <SectionForm>
        <ContainerForm>
          <DivForm
            whileInView="visible"
            initial="initial"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: -60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1.5 },
              },
            }}
          >
            <IconForm />
            <TitleForm>Garanta sua vaga para a primeira viagem</TitleForm>
            <SubtitleForm>
              Preencha os campos abaixo para entrar na lista de espera
            </SubtitleForm>

            <Form type="text" text="Seu nome" />
            <Form type="email" text="E-mail" />
            <Form type="number" text="Telefone" />

            <DivInputCheckbox>
              <InputCheckbox type="checkbox" />

              <TextCheckbox>Concordo em receber comunicações</TextCheckbox>
            </DivInputCheckbox>

            <Button text="Garantir minha vaga" fullWidth />
          </DivForm>

          <DivRocketImage
            whileInView="visible"
            initial="initial"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 0 },
              visible: {
                opacity: 1,
                y: -100,
                transition: { duration: 1, delay: 1 },
              },
            }}
          >
            <RocketImage>
              <img src="/images/rocket.svg" alt="Rocket" />
            </RocketImage>
          </DivRocketImage>
        </ContainerForm>

        <SectionFooter>
          <DivImageSmoke
            whileInView="visible"
            initial="initial"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, y: 0 },
              visible: {
                opacity: 1,
                y: -100,
                transition: { duration: 0.7, delay: 0.9 },
              },
            }}
          >
            <img src="/images/smoke.svg" alt="" />
          </DivImageSmoke>

          <DivFooterBottom>
            <DivLogoSpaceY>
              <Logo />
            </DivLogoSpaceY>

            <DivSocial>
              <img src="/images/instagram.svg" alt="" />
              <img src="/images/linkedin.svg" alt="" />
              <img src="/images/facebook.svg" alt="" />
            </DivSocial>

            <DivFooterMenu>
              <ul>
                <li>
                  <a href="/">Início</a>
                </li>
                <li>
                  <a href="/">Sobre nós</a>
                </li>
                <li>
                  <a href="/">Missões</a>
                </li>
                <li>
                  <a href="/">Contato</a>
                </li>
              </ul>
            </DivFooterMenu>
          </DivFooterBottom>
        </SectionFooter>
      </SectionForm>
    </>
  );
}

export default App;
