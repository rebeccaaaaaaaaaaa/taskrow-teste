import { createContext, ReactNode, useEffect, useState } from "react";

interface GlobalContextData {
  grupos: Grupo[];
  setGrupos: React.Dispatch<React.SetStateAction<Grupo[]>>;
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
