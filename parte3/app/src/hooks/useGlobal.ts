import { useContext } from "react";
import { GlobalContext } from "../context/Groupos/index";

export function useGlobal() {
  const value = useContext(GlobalContext);
  return value;
}