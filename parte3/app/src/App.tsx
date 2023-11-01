import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Grupos } from './pages/Grupos';
import { NoMatch } from './pages/NoMatch';
import { Header } from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
