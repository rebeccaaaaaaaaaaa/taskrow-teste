import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'
import { GlobalProvider } from './context/Grupos/index.tsx'
import { CadastroProvider } from './context/Cadastro/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalProvider>
       <CadastroProvider>
          <App />
       </CadastroProvider>
      </GlobalProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
