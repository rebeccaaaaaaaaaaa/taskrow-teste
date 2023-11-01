import { Box, Container, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Grupo } from "../context";
import { Link } from "react-router-dom"; // Importe o Link
import { useGlobal } from "../hooks/useGlobal";

export function Grupos() {
  const { grupos } = useGlobal()

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
              <Link to={`/grupos/${grupo.idGrupo}`}> {/* Link para /grupos/:id */}
                <Text fontWeight="bold" ml={2}>
                  {grupo.nome}
                </Text>
              </Link>
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
      <Flex justifyContent="" gap="10rem" mt={6}>
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
