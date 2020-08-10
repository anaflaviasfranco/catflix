import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import useForm from '../../../../hooks/useForm';
import FormField from '../../../FormField';
import Button from '../../../Button';
import videosRepository from '../../../../repositories/videos';
import categoriasRepository from '../../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({titulo}) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Video padrao',
    url: 'https://www.youtube.com/watch?v=OzlXl75no6U',
    categoria: 'Gatos',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      // eslint-disable-next-line no-undef
      setCategorias(categoriasFromServer);
    });
  }, []);



  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        // alert('Video Cadastrado com sucesso!');

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do Video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestion={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
