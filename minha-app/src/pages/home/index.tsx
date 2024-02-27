import Button from "../../components/Button";
import Container from "../../components/Container";
import DivIcons from "../../components/DivIcons";
import Icon from "../../components/Icon";
import { GlobalStyles } from "../../styles/globalstyles";
import {
  AstrounautIllustration,
  DivButton,
  FirstTitle,
  Header,
  Logo,
  Main,
  SecondTitle,
  Subtitle,
} from "../../styles/styles";
import pixelToRem from "../../utils/pxToRem";

export const Home = () => {
  return (
    <div style={{ margin: "auto", maxWidth: "1500px", overflowX: "hidden" }}>
      <Container flex="column" margin={pixelToRem(20)}>
        <GlobalStyles />
        <Header>
          <Logo />
        </Header>

        <Main>
          <FirstTitle>Finalmente é possível!</FirstTitle>
          <SecondTitle>
            Sua jornada para Marte começa aqui <span>.</span>
          </SecondTitle>
          <Subtitle>
            A primeira viagem para Marte estará disponivél apartir do dia
            12/03/2028. Inscreva-se em nossa lista de espera.
          </Subtitle>
          <div style={{ backgroundColor: "red" }}>
            <AstrounautIllustration />
          </div>
          <DivButton>
            <Button text="Inscreva-se agora" fullWidth />
          </DivButton>
        </Main>

        <DivIcons
          whileInView="visible"
          initial="initial"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.3 },
            },
          }}
        >
          <Icon
            src="/images/icon-rocket.svg"
            txt="Foguetes com a mais alta tecnologia e conforto."
            alt="Rocket"
          />

          <Icon
            src="/images/icon-flag.svg"
            txt="Mais de 100 missões consecutivas com sucesso."
            alt="Flag"
          />

          <Icon
            src="/images/icon-telescope.svg"
            txt="Experiencia única e exclusiva."
            alt="Telescope"
          />
        </DivIcons>
      </Container>
    </div>
  );
};
