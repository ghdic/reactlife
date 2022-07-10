import './App.css';
import {useEffect, useState} from "react";
import devtools from 'devtools-detect';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import OtherPage from "./components/OtherPage";

function App() {

  const [devOpen, setDevOpen] = useState(devtools.isOpen)

  useEffect(() => {
      window.addEventListener('devtoolschange', event => {
          setDevOpen(event.detail.isOpen)
      });
  }, []);

  return (
      <BrowserRouter>
          <ul>
              <li><Link to="/">Main</Link></li>
              <li><Link to="/other">Other</Link></li>
          </ul>
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/other" element={<OtherPage/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
