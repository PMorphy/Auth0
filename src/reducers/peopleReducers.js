import {
  PEOPLE_LIST_REQUEST,
  PEOPLE_LIST_SUCCESS,
  PEOPLE_LIST_FAILURE
} from '../constraints/peopleConstraints';

const peopleListReducer = (
  state = { people: [], loading: false, errors: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case PEOPLE_LIST_REQUEST:
      return { loading: true, errors: null };
    case PEOPLE_LIST_SUCCESS:
      return { loading: false, people: payload, errors: null };
    case PEOPLE_LIST_FAILURE:
      return { loading: false, errors: payload };
    default:
      return state;
  }
};

export { peopleListReducer };
