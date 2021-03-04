import {
  ADD_BOOK,
  DELETE_BOOK,
  SET_CURRENT_PAGE_BOOK,
  TOGGLE_FAV_BOOK,
} from '../actionTypes';

import {images} from '../../constants';

const initialState = [
  // {
  //   id: 0,
  //   cover: images.Sprint,
  //   title: 'Sprint',
  //   description:
  //     'How To Solve Big Broblems and Test New ideas in Just Five Days',
  //   author: 'Jake Knapp',
  //   currentPage: 300,
  //   pages: 320,
  //   fav: true,
  // },
  // {
  //   id: 1,
  //   cover: images.CabraDMM,
  //   title: 'A cabra da minha mãe',
  //   description: 'O Segredo da Prosperidade Financeira',
  //   author: 'Ricardo Kaniama',
  //   currentPage: 20,
  //   pages: 120,
  //   fav: false,
  // },
  // {
  //   id: 2,
  //   cover: images.CincoLDA,
  //   title: 'As 5 linguagens do amor',
  //   description: '',
  //   author: 'Gary Chapman',
  //   currentPage: 100,
  //   pages: 200,
  //   fav: false,
  // },
  // {
  //   id: 3,
  //   cover: images.Holocausto,
  //   title: 'O holocausto',
  //   description: 'O coleccionador de Lágrimas',
  //   author: 'Augusto Cury',
  //   currentPage: 200,
  //   pages: 230,
  //   fav: false,
  // },
  // {
  //   id: 4,
  //   cover: images.SegredosDMM,
  //   title: 'Os segredos da mente milionária',
  //   description: '',
  //   author: 'T. Harv Eker',
  //   currentPage: 100,
  //   pages: 180,
  //   fav: false,
  // },
  // {
  //   id: 5,
  //   cover: images.VendedorS,
  //   title: 'O vendedor de sonhos',
  //   description: 'O Chamado',
  //   author: 'Augusto Cury',
  //   currentPage: 160,
  //   pages: 198,
  //   fav: false,
  // },
];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const {book} = action.payload;
      return [
        ...state,
        {
          ...book,
          id: action.payload.id,
          fav: false,
          currentPage: 0,
        },
      ];
    }

    case TOGGLE_FAV_BOOK: {
      const {id} = action.payload;

      return state.map((item) => {
        if (item.id === id) {
          return Object.assign({}, item, {fav: !item.fav});
        }
        return item;
      });
    }

    default: {
      return state;
    }
  }
}
