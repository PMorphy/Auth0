import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { listPeople } from '../actions/listPeople';

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const peopleData = useSelector((state) => state.people);
  const { people, loading, errors } = peopleData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPeople());
  }, [dispatch]);

  return (
    isAuthenticated && (
      <div className='text-warning text-left container'>
        <img className='rounded-circle' src={user.picture} alt={user.name} />
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <hr />
        {loading ? (
          <h3>Loading List...</h3>
        ) : errors ? (
          <>
            <h3>Something Went Wrong! </h3>
            <h3>Error: {errors}</h3>
          </>
        ) : (
          <div className='people-list'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Age</th>
                  <th scope='col'>Status</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person) => {
                  return (
                    <tr key={person.name}>
                      <td>
                        <strong>{person.name}</strong>
                      </td>
                      <td>{person.age}</td>
                      <td>{person.married === true ? 'Married' : 'Single'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  );
}

export default Profile;
