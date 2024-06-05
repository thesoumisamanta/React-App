import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
      <Navbar title="TSS" about="About" />
      <div className="container">
        <Form heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
