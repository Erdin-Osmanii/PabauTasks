import './App.css';
import Home from './Home';
import P1 from './P1';
import P2 from './P2';
import P3 from './P3';
import P4 from './P4';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/P1.js" element={<P1/>} />
          <Route path="/P2.js" element={<P2/>} />
          <Route path="/P3.js" element={<P3/>} />
          <Route path="/P4.js" element={<P4/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
