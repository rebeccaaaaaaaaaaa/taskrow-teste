import { useParams, Outlet } from 'react-router-dom';
import { useGlobal } from '../hooks/useGlobal';

function DetalhesGrupo() {
  const { id } = useParams();
  const { grupos } = useGlobal();

  if (id === undefined) {
    return <div>Parâmetro ID ausente.</div>;
  }

  const grupo = grupos.find((g) => g.idGrupo === parseInt(id, 10));

  if (!grupo) {
    return <div>Grupo não encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalhes do Grupo {grupo.nome}</h2>
      <p>Nome: {grupo.nome}</p>

      {/* Adicione mais informações do grupo aqui */}
      <Outlet />
    </div>
  );
}

export default DetalhesGrupo;
