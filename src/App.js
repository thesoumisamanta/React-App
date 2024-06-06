import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls) => { 
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#131d4b'
      showAlert("Dark mode has been enabled", "success")
      document.title = "Text Analyzer - Dark Mode"
      // setInterval(() => {
      //   document.title = "Text Analyzer is Amazing"
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Install Text-Analyzer"
      // }, 2000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "Text Analyzer - Light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Analyzer" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About  mode={mode} />} />
            <Route exact path="/" element={<Form showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
