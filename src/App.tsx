import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UnitDetail from './pages/UnitDetail';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unit/:id" element={<UnitDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;