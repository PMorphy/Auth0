import {
  PEOPLE_LIST_REQUEST,
  PEOPLE_LIST_SUCCESS,
  PEOPLE_LIST_FAILURE
} from '../constraints/peopleConstraints';
import axios from 'axios';

const listPeople = () => async (dispatch) => {
  dispatch({ type: PEOPLE_LIST_REQUEST });

  try {
    const { data } = await axios.get('/api/people');
    dispatch({ type: PEOPLE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PEOPLE_LIST_FAILURE, payload: error.message });
  }
};

export { listPeople };
