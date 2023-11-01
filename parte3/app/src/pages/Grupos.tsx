import { Box, Container, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";

interface Usuario {
  idUsuario: number;
  nome: string;
}

interface Grupo {
  idGrupo: number;
  nome: string;
  usuarios?: Usuario[];
  subGrupos?: Grupo[];
}

export function Grupos() {
  const [grupos, setGrupos] = useState<Grupo[]>([]);

  useEffect(() => {
    // Faz a solicitação fetch para carregar o arquivo JSON
    fetch("/grupos.json")
      .then((response) => response.json())
      .then((data) => setGrupos(data.grupos))
      .catch((error) => console.error("Erro ao carregar grupos.json:", error));
  }, []);

  const renderGrupos = (grupos: Grupo[], depth = 0) => {
    return (
      <List>
        {grupos.map((grupo) => (
          <ListItem key={grupo.idGrupo}>
            <Flex align="center">
              {grupo.subGrupos && grupo.subGrupos.length > 0 ? (
                <ChevronDownIcon boxSize={4} color="gray.500" />
              ) : (
                <ChevronRightIcon boxSize={4} color="transparent" />
              )}
              <Text fontWeight="bold" ml={2}>
                {grupo.nome}
              </Text>
            </Flex>
            {grupo.usuarios && (
              <List ml={4}>
                {grupo.usuarios.map((usuario) => (
                  <ListItem key={usuario.idUsuario}>{usuario.nome}</ListItem>
                ))}
              </List>
            )}
            {grupo.subGrupos && (
              <List ml={4}>
                {renderGrupos(grupo.subGrupos, depth + 1)}
              </List>
            )}
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Container maxW="8xl">
      <Flex justifyContent="space-between" gap="10rem" mt={6}>
        <Box background="#eee" p={10}>
          <Heading as={'h1'} fontSize={20} mb={10}>Grupos</Heading>
          {renderGrupos(grupos)}
        </Box>
        <Box>
          <h1>Detalhes Grupos</h1>
        </Box>
      </Flex>
    </Container>
  );
}
