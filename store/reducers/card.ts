// import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from '../types'

import purpleCardColor from '../../assets/images/Common/Card.png';
import redCardColor from '../../assets/images/Common/CardRed.png';

const initialState = {
  cards: [
    {
      accountNumber: 4123535352141353,
      balance: 1425.42,
      color: purpleCardColor,
    },
    {
      accountNumber: 3563573456234561,
      balance: 4435.56,
      color: redCardColor,
    },
    {
      accountNumber: 5234782451467524,
      balance: 2777.23,
      color: purpleCardColor,
    },
  ],
};

// export const postReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOAD_POSTS:
//       return {
//         ...state,
//         allPosts: action.payload,
//         bookedPosts: action.payload.filter(post => post.booked)
//       }
//   }
// }

export const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
