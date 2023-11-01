import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, HeroBg, Preview } from "./styles.";
import Image from "next/image";

import previewImage from "../../assets/app-preview.png";
import bgHero from "../../assets/home-bg.png";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size={"4xl"} as="h1">
          Agendamento descomplicado
        </Heading>
        <Text size={"xl"}>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <HeroBg>
          <Image src={bgHero} alt="" height={680} />
        </HeroBg>
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt="Calendário simbolizando a aplicação em funcionamento"
          height={442}
          width={827}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  );
}
