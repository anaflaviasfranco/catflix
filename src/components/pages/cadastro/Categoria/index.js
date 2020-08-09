import React, {useState} from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../FormField';
import Button from '../../../Button'

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, //nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // console.log('[nomeDaCategoria]', nomeDaCategoria);
    // console.log('[infoDosEventos.target.value]', infosDoEvento.target.value);
    // setValues(infosDoEvento.target.value);
    const {getAttribute, value} = infosDoEvento.target;
    setValue(
      getAttribute('name'),  
      value
    );

  }


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={ function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Voce tentou enviar o form ne?');
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <FormField
          label="Nome da Categoria"
          type="nome"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />


        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        
        {/* <div>    
          <label>
            Descrição:
            <textarea 
            type="text"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>    
          <label>
            Cor:
            <input 
            type="color"
            value={values.cor}
            name="cor"
            onChange={handleChange}
            />
          </label>
        </div> */}

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para home
        </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;