import uuid from 'uuid/dist/v1';

export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          name: action.cars.name,
          body: action.cars.body,
          link: action.cars.link,
          id: uuid(),
        },
      ];

    case 'REMOVE_FAVORITE':
      return state.filter((e) => e.id !== action.cars.id);

    default:
      return state;
  }
};
