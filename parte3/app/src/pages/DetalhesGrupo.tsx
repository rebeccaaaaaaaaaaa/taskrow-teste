import { useParams } from 'react-router-dom';

function DetalhesGrupo() {
  const { id } = useParams();

  if (id === undefined) {
    return <div>Parâmetro ID ausente.</div>;
  }

  // esse objeto vai ser o que vai vir do context
  const grupo = {
    idGrupo: 1,
    nome: 'Grupo 1',
    descricao: 'Descrição do Grupo 1',
  };

  if (grupo.idGrupo !== parseInt(id, 10)) {
    return <div>Grupo não encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalhes do Grupo {grupo.nome}</h2>
      <p>Nome: {grupo.nome}</p>
      <p>Descrição: {grupo.descricao}</p>
      {/* Adicione mais informações do grupo aqui */}
    </div>
  );
}

export default DetalhesGrupo;
