import { Box, Button, Container, Flex, Heading, Input, List, ListItem, Text } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Grupo } from "../context/Grupos";
import { Link } from "react-router-dom";
import { useGlobal } from "../hooks/useGlobal";

export function Grupos() {
  const { grupos, searchTerm, setSearchTerm, handleSearch, filteredGroups } = useGlobal();

  const renderGroups = (groups: Grupo[]) => {
    return (
      <List>
        {groups.map((group) => (
          <ListItem key={group.idGrupo}>
            <Flex align="center">
              {group.subGrupos && group.subGrupos.length > 0 ? (
                <ChevronDownIcon boxSize={4} color="gray.500" />
              ) : (
                <ChevronRightIcon boxSize={4} color="transparent" />
              )}
              <Link to={`/grupos/${group.idGrupo}`}>
                <Text fontWeight="bold" ml={2}>
                  {group.nome}
                </Text>
              </Link>
            </Flex>
            {group.usuarios && (
              <List ml={4}>
                {group.usuarios.map((usuario) => (
                  <ListItem key={usuario.idUsuario}>{usuario.nome}</ListItem>
                ))}
              </List>
            )}
            {group.subGrupos && (
              <List ml={4}>
                {renderGroups(group.subGrupos)}
              </List>
            )}
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Container maxW="8xl">
      <Flex justifyContent="" gap="5rem" mt={6}>
        <Box background="#eee" p={10}>
          <Heading as={'h1'} fontSize={20} mb={10}>Grupos</Heading>
          {renderGroups(grupos)}
        </Box>
        <Box background="#eee" p={10} width={'100%'}>
          <Flex>
            <Input
              placeholder="Buscar por usuário..."
              background="#fff"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={handleSearch} colorScheme="whatsapp">Buscar</Button>
          </Flex>
          {filteredGroups.length === 0 ? (
            <Box mt={5}>Digite um usuário para buscar seus grupos.</Box>
          ) : (
            <Box mt={5}>
              {renderGroups(filteredGroups)}
            </Box>
          )}
        </Box>
      </Flex>
    </Container>
  );
}
