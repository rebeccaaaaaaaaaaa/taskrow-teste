import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
  } from "@chakra-ui/react";
import { useCadastro } from "../hooks/useCadastro";
  
  export function Cadastro() {

    const { 
      emailError, 
      handleInputChangeEmail, 
      handleInputChangeName, 
      nameError, 
      handleInputChangeXpto,
      inputEmail,
      xptoError,
      inputXpto,
      validateInputs, 
    } = useCadastro()
  
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
  