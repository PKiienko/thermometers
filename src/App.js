import { useState } from 'react';
import './App.css';
import ThermometersList from './ThermometersList';
import Form from './Form';


const App = () => {

  const [inputText, setInputText] = useState('');
  const [apiKeys, setApiKeys] = useState([]);


  return (
    <div className="App">
      <p>Thermometers</p>
      <Form apiKeys={apiKeys} setApiKeys={setApiKeys} inputText={inputText} setInputText={setInputText}/>
      <ThermometersList apiKeys={apiKeys}/>
    </div>
  );
}

export default App;
