import { createContext, ReactNode, useState } from "react";
import {
    useToast,
  } from "@chakra-ui/react";
import { isValidEmail } from "../../utils/validaEmail";
import { formatXpto } from "../../utils/formatXpto";
import { validaNumeroXpto } from "../../utils/utils";


interface CadastroContextData {
    inputName: string;
    setInputName: React.Dispatch<React.SetStateAction<string>>;
    inputEmail: string;
    setInputEmail: React.Dispatch<React.SetStateAction<string>>;
    inputXpto: string;
    setInputXpto: React.Dispatch<React.SetStateAction<string>>;

    nameError: boolean;
    emailError: boolean;
    xptoError: boolean;

    setNameError: React.Dispatch<React.SetStateAction<boolean>>
    setEmailError: React.Dispatch<React.SetStateAction<boolean>>
    setXptoError: React.Dispatch<React.SetStateAction<boolean>>

    handleInputChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleInputChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleInputChangeXpto: (e: React.ChangeEvent<HTMLInputElement>) => void
    validateInputs: () => void;
}

interface CadastroProps {
  children: ReactNode;
}

export const CadastroContext = createContext<CadastroContextData>(
  {} as CadastroContextData
);

export function CadastroProvider({ children }: CadastroProps) {

    const toast = useToast();

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputXpto, setInputXpto] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [xptoError, setXptoError] = useState(false);

    const handleInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
        setNameError(e.target.value.length < 3);
      };
    
      const handleInputChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputEmail(e.target.value);
        setEmailError(!isValidEmail(e.target.value));
      };
    
      const handleInputChangeXpto = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Remover qualquer caractere não numérico
        const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
        const formattedValue = formatXpto(cleanedValue);
    
        setInputXpto(formattedValue);
        const numXpto = parseInt(cleanedValue, 10);
    
        if (cleanedValue.length !== 5) {
          setXptoError(true);
        } else {
          setXptoError(!validaNumeroXpto(numXpto));
        }
      };
     
      const validateInputs = () => {
        if (inputName.length < 3) {
          toast({
            title: "",
            description: "O campo nome deve ter pelo menos 3 caracteres",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return;
        }
    
        if (!isValidEmail(inputEmail)) {
          toast({
            title: "",
            description: "O e-mail inserido não é válido",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return;
        }
    
        if (xptoError) {
          toast({
            title: "",
            description: "O número XPTO inserido não é válido",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          return;
        }
  
        // se todos os campos forem validos 
        if (!xptoError && isValidEmail(inputEmail) && inputName.length >= 3) {
          toast({
            title: "",
            description: "Registro feito com sucesso",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      };

  return (
    <CadastroContext.Provider
      value={{
        inputEmail,
        emailError,
        inputName,
        inputXpto,
        nameError,
        setEmailError,
        setInputEmail,
        setInputName,
        setInputXpto,
        setNameError,
        setXptoError,
        xptoError,
        handleInputChangeEmail,
        handleInputChangeName,
        handleInputChangeXpto,
        validateInputs,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
}
