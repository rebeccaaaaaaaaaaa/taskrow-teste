import { useContext } from "react";
import { GlobalContext } from "../context/Grupos/index";

export function useGlobal() {
  const value = useContext(GlobalContext);
  return value;
}