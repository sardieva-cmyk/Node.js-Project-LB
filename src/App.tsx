import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UnitDetail from './pages/UnitDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unit/:id" element={<UnitDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;