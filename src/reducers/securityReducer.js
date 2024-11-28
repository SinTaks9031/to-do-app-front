import { SET_CURRENT_USER,GET_USERS } from "../actions/types";

const initialState = {
  validToken: false,
  user: {},
  users:[]
};

const booleanActionPayload = payload => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: booleanActionPayload(action.payload),
        user: action.payload
      };

      case GET_USERS:
        return {
          ...state,
          users: action.payload
        };

    default:
      return state;
  }
}
