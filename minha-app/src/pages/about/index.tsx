import Container from "../../components/Container";
import Gallery from "../../components/Gallery";
import { ArrowLeft, ArrowRight } from "../../components/Gallery/styles";
import {
  ContainerAbout,
  DivAboutMars,
  DivLogo,
  DivLogoSpaceY,
  FirstTitle,
  GalleryContent,
  ImageMars,
  Logo,
  SecondSubTitle,
  SectionAbout,
  TextLogo,
  TextMars,
  TextSubscribe
} from "../../styles/styles";

export const About = () => {
  return (
    <div >
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
    </div>
  );
};
