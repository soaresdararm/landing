import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import ComponentForm from "../../components/Form";
import {
  ContainerForm,
  DivFooterBottom,
  DivFooterMenu,
  DivForm,
  DivImageSmoke,
  DivLogoSpaceY,
  DivRocketImage,
  DivSocial,
  IconForm,
  Logo,
  RocketImage,
  SectionFooter,
  SectionForm,
  SubtitleForm,
  TitleForm,
} from "../../styles/styles";

export const Form = () => {
  return (
    <div>
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

            <ComponentForm type="text" text="Seu nome" />
            <ComponentForm type="email" text="E-mail" />
            <ComponentForm type="number" text="Telefone" />

            <Checkbox />
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
    </div>
  );
};
