import React, { useEffect, useState } from 'react';

function LandingPage({}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  }, []);

  return (
    <div className='container'>
      <h1>Leaderboard</h1>
      {error ? <code>{error}</code> : null}
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Public Address</th>
          <th>Ra's Earned</th>
          <th>Ra's Spent</th>
        </thead>

        <tbody>
          {data &&
            data.map((user) => {
              return (
                <tr>
                  <td>{user.first_name + ' ' + user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.publicAddress}</td>
                  <td>{user.ra_earned}</td>
                  <td>{user.ra_spent}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* <code>{JSON.stringify({ data: data, error })}</code> */}
    </div>
  );
}

export default LandingPage;
