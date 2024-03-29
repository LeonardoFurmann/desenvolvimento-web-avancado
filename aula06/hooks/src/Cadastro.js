import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

function Cadastro() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    function handleNomeChange(event){
        setNome(event.target.value);
    }

    function handleTelefoneChange(event){
        setTelefone(event.target.value);
    }

    function handleSubimit(event){
        event.preventDefault();
        console.log(`Nome:  ${nome}, Telefone: ${telefone}`);
    }


  return (
    <div className="form-custom">
      <form onSubmit={handleSubimit}>
        <label>
            Nome:
            <input type="text" value={nome} onChange={handleNomeChange}/>
        </label>

        <br />

        <label>
           Telefone:
            <input type="text" value={telefone} onChange={handleTelefoneChange}/>
        </label>

        <br />

        <button type="submit">Enviar</button>

        </form>
    </div>
  );
}

export default Cadastro;
