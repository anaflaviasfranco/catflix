import config from '../config';

// eslint-disable-next-line import/no-named-as-default-member
const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

// function getAll() {
//   return fetch(`${URL_CATEGORIES}`)
//     .then(async (respostaDoServidor) => {
//       if (respostaDoServidor.ok) {
//         const resposta = await respostaDoServidor.json();
//         return resposta;
//       }

//       throw new Error('Não foi possível pegar os dados :(');
//     });
// }

function create() {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    // eslint-disable-next-line no-undef
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
  create,
//   getAll,
};
