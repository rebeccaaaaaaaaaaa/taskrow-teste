import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Cadastro } from './components/Cadastro';
import { Grupos } from './components/Grupos';
import { NoMatch } from './components/NoMatch';

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
