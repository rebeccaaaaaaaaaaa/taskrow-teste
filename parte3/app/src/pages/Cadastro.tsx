import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { validaNumeroXpto } from "../utils"; // Importe as funções do módulo numeroXpto
  
  export function Cadastro() {
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
  
    const isValidEmail = (email: string) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      return emailRegex.test(email);
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
    };
  
    const formatXpto = (value: string) => {
      const cleanedValue = value.replace(/[^0-9]/g, "");
      if (cleanedValue.length <= 4) {
        return cleanedValue;
      }
      return `${cleanedValue.slice(0, 4)}-${cleanedValue.charAt(4)}`;
    };
  
    return (
      <Container maxW="8xl">
        <Box background="#eee" p={10} width={"50%"} gap={10} m="auto" mt={20}>
          <FormControl isRequired>
            <FormLabel>Nome: </FormLabel>
            <Input
              placeholder="Digite seu nome"
              bg={"#fff"}
              minLength={3}
              onChange={handleInputChangeName}
              isInvalid={nameError}
            />
            {nameError && (
              <FormErrorMessage>
                O campo de nome deve conter pelo menos 3 caracteres.
              </FormErrorMessage>
            )}
          </FormControl>
  
          <FormControl isRequired mt={10}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={inputEmail}
              placeholder="Digite seu e-mail"
              onChange={handleInputChangeEmail}
              isInvalid={emailError}
              bg={"#fff"}
            />
            {emailError && (
              <FormErrorMessage>O e-mail inserido não é válido.</FormErrorMessage>
            )}
          </FormControl>
  
          <FormControl isRequired mt={10}>
            <FormLabel>Xpto: </FormLabel>
            <Input
              placeholder="XPTO"
              bg={"#fff"}
              onChange={handleInputChangeXpto}
              value={inputXpto}
              isInvalid={xptoError}
            />
            {xptoError && (
              <FormErrorMessage>
                O número XPTO inserido não é válido.
              </FormErrorMessage>
            )}
          </FormControl>
  
          <Button mt={10} colorScheme="green" width={"50%"} onClick={validateInputs}>
            Cadastrar
          </Button>
        </Box>
      </Container>
    );
  }
  