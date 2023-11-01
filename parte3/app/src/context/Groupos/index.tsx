import { createContext, ReactNode, useEffect, useState } from "react";

interface GlobalContextData {
  grupos: Grupo[];
  setGrupos: React.Dispatch<React.SetStateAction<Grupo[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filteredGroups: Grupo[];
  setFilteredGroups: React.Dispatch<React.SetStateAction<Grupo[]>>;
  filterGroupsByUser: (groups: Grupo[], username: string) => Grupo[]
  handleSearch: () => void;
}

interface GlobalProps {
  children: ReactNode;
}

interface Usuario {
  idUsuario: number;
  nome: string;
}

export interface Grupo {
  idGrupo: number;
  nome: string;
  usuarios?: Usuario[];
  subGrupos?: Grupo[];
}

export const GlobalContext = createContext<GlobalContextData>(
  {} as GlobalContextData
);

export function GlobalProvider({ children }: GlobalProps) {
  const [grupos, setGrupos] = useState<Grupo[]>([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGroups, setFilteredGroups] = useState<Grupo[]>([]);

  const filterGroupsByUser = (groups: Grupo[], username: string) => {
    const filteredGroups: Grupo[] = [];

    groups.forEach((group) => {
      if (group.usuarios) {
        group.usuarios.forEach((usuario) => {
          if (usuario.nome.toLowerCase().includes(username.toLowerCase())) {
            filteredGroups.push(group);
          }
        });
      }

      if (group.subGrupos) {
        filteredGroups.push(...filterGroupsByUser(group.subGrupos, username));
      }
    });

    return filteredGroups;
  };

  const handleSearch = () => {
    const filtered = filterGroupsByUser(grupos, searchTerm);
    setFilteredGroups(filtered);
  };


  useEffect(() => {
    console.log("context is working");
    // Faz a solicitação fetch para carregar o arquivo JSON
    fetch("/grupos.json")
      .then((response) => response.json())
      .then((data) => setGrupos(data.grupos))
      .catch((error) => console.error("Erro ao carregar grupos.json:", error));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        grupos,
        setGrupos,
        searchTerm,
        setSearchTerm,
        filteredGroups,
        setFilteredGroups,
        filterGroupsByUser,
        handleSearch
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
