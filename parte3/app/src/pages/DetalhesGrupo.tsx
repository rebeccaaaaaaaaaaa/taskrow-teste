import { useParams, Outlet } from "react-router-dom";
import { useGlobal } from "../hooks/useGlobal";
import { Box, Container, Flex, Heading, List, ListItem } from "@chakra-ui/react";

function DetalhesGrupo() {
  const { id } = useParams();
  const { grupos } = useGlobal();

  if (id === undefined) {
    return <div>Parâmetro ID ausente.</div>;
  }

  const grupo = grupos.find((g) => g.idGrupo === parseInt(id, 10));

  if (!grupo) {
    return (
      <Container maxW="8xl">
        <Box background="#eee" p={10} width={"100%"} mt={20}>
          Grupo não encontrado
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="8xl">
      <Flex background="#eee" p={10} width={"100%"} mt={20} gap={10}>
        <Box>
          <Heading fontWeight='normal'>
            Detalhes do Grupo: <strong>{grupo.nome}</strong>
          </Heading>
          <p> Usuários pertencentes ao grupo: </p>
          {grupo.usuarios && grupo.usuarios.length > 0 ? (
            <List p={3}>
              {grupo.usuarios.map((usuario) => (
                <ListItem key={usuario.idUsuario}>- {usuario.nome}</ListItem>
              ))}
            </List>
          ) : (
            <p>Nenhum usuário cadastrado neste grupo.</p>
          )}
        </Box>
        {/* Adicione mais informações do grupo aqui */}
        <Outlet />
      </Flex>
    </Container>
  );
}

export default DetalhesGrupo;
