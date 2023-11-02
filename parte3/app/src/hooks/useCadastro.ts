import { useContext } from "react";
import { CadastroContext  } from "../context/Cadastro/index";

export function useCadastro() {
  const value = useContext(CadastroContext);
  return value;
}