import { useParams, Outlet } from "react-router-dom";
import { useGlobal } from "../hooks/useGlobal";
import { Box, Container, Flex, Heading, List, ListItem } from "@chakra-ui/react";
import { Grupo } from "../context/Grupos";

function findGroupById(groups: Grupo[], idGrupo: string) : unknown | null {
  for (const group of groups) {
    if (group.idGrupo === parseInt(idGrupo, 10)) {
      return group;
    }
    if (group.subGrupos) {
      const nestedGroup : unknown | null = findGroupById(group.subGrupos, idGrupo);
      if (nestedGroup) {
        return nestedGroup;
      }
    }
  }
  return null;
}


function DetalhesGrupo() {
  const { idGrupo } = useParams();
  const { grupos } = useGlobal();

  if (idGrupo === undefined) {
    return <div>Parâmetro ID ausente.</div>;
  }

  interface Grupo {
    nome: string;
    usuarios: { idUsuario: number; nome: string }[];
  }

  const grupo = findGroupById(grupos, idGrupo) as Grupo;

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
            {grupo.usuarios.map((usuario) => (  // Removed the extra '}'
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
