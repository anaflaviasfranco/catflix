import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // console.log('[nomeDaCategoria]', nomeDaCategoria);
    // console.log('[infoDosEventos.target.value]', infosDoEvento.target.value);
    // setValues(infosDoEvento.target.value);
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value,
    );
  }

  useEffect(() => {
    // console.log('alo alo');
    const URL_TOP = 'http://localhost:8080/categorias';

    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Voce tentou enviar o form ne?');
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

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

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
