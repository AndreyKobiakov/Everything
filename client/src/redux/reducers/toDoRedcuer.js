import { DELETE_TODO, ADD_TODO, GET_TODO } from '../types';

const initialState = {
  toDoS: [
    {
      id: 1,
      title: 'Сделать',

      items: [
        {
          id: 1,
          text: 'Выкинуть мусор',
        },
        {
          id: 2,
          text: 'Покодить',
        },
        {
          id: 3,
          text: 'Решить задачу',
        }],
    },
    {
      id: 2,
      title: 'Проверить',
      items: [
        {
          id: 4,
          text: 'Сходить в магазин',
        },
        {
          id: 5,
          text: 'Приготовить обед',
        },
        {
          id: 6,
          text: 'Посмотреть фильм',
        }],
    },
    {
      id: 3,
      title: 'Сделано',
      items: [
        {
          id: 7,
          text: 'Погулять с собакой',
        },
        {
          id: 8,
          text: 'Забрать ребенка из школы',
        },
        {
          id: 9,
          text: 'Досмотреть сериал',
        },
      ],
    },
  ],
};
const toDoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      state.toDoS[0].items.splice(0, 0, {
        id: Math.round((Math.random() * ((100000000 - 6) + 1)) + 6),
        text: payload,
      });
      console.log('state', state);
      return state;
    case GET_TODO:
      return [payload];
    case DELETE_TODO:
      return state.filter((el) => el !== payload);
    default:
      return state;
  }
};
export default toDoReducer;
