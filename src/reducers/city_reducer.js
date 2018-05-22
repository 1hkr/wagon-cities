// export default function(state, action) {
//   if (state === undefined) {
//     return [];
//   }

//   switch (action.type) {
//     case 'SET_CITIES':
//       return action.payload;
//     default:
//       return state;
//   }
// }

const citiesReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
};

export default citiesReducer;
