import { Box, Container, Flex } from "@chakra-ui/react";
import Social from "../components/Social";
import { SiGithub, SiLinkedin } from 'react-icons/si'

export function Home() {
  return (
    <Container maxW="8xl">
      <Box pt={20}>
        Olá, meu nome é Rebecca, sou desenvolvedora front-end apaixonada por
        criar interfaces de usuário responsivas e envolventes. Com mais de 6
        anos de experiência na área, trbalhei extensivamente com o ecossistema
        JavaScript, incluindo estruturas populares como ReactJS e NextJs. Também
        tive contato com NodeJS para criação de APIS REST, assim com AWS para
        aplicações web.{" "}
      </Box>

      <Box pt={4}>
        Eu me especializei na criação de aplicativos da Web dinâmicos que
        oferecem experiências de usuário perfeitas em vários dispositivos e
        plataformas. Minha experiência em HTML, CSS (CSSS e SASS), juntamente
        com alguns frameworks CSS como Tailwind e JavaScript me permite me
        atentar a criar um código limpo e sustentável que atenda os mais comuns
        padrões de qualidade e desempenho. Tenho familiaridade também com o
        Strapi como CMS e criação de APIS.{" "}
      </Box>

      <Box pt={4}>
        Como uma desenvolvedora orientada a detalhes e resultados, prospero em
        ambientes colaborativos onde posso trabalhar em estreita colaboração com
        designers, gerentes de produto e outras partes interessadas para
        fornecer soluções inovadoras que superam as expectativas do usuário.
        Quer esteja desenvolvendo novos recursos, otimizando o código existente
        ou depurando problemas complexos, sempre me esforço para oferecer os
        melhores resultados possíveis.
      </Box>

      <Flex pt={4}>
        <Social name="Linkedin" icon={<SiLinkedin/>} link="https://www.linkedin.com/in/rebecca-ignacio/" colorScheme="linkedin"/>
        <Social name="Github" icon={<SiGithub/>} link="https://www.linkedin.com/in/rebecca-ignacio/" colorScheme="gray"/>
      </Flex>
    </Container>
  );
}
