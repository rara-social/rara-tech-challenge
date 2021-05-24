import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: black;
  color: white;
`;

const H1 = styled.h1`
  margin: 0;
  padding: 1rem;
`;

const Table = styled.table`
  padding: 1rem;
  width: 100%;
`;

const TR = styled.tr`
  text-align: center;

  &:hover {
    color: lightblue;
    cursor: pointer;
  }
`;

function LandingPage({}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/leaderboard")
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
    <Wrapper>
      <H1>Leaderboard</H1>
      {error ? <code>{error}</code> : null}
      <Table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Public Address</th>
          <th>Ra's Earned</th>
          <th>Ra's Spent</th>
        </thead>

        <tbody>
          {data &&
            data.map((user, i) => {
              return (
                <TR
                  key={`user-${i}`}
                  onClick={() => {
                    console.log(
                      `Clicking on a row should navigate the user to ${user.first_name}'s Profile Page`
                    );
                  }}
                >
                  <td>{user.first_name + " " + user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.publicAddress}</td>
                  <td>{user.ra_earned}</td>
                  <td>{user.ra_spent}</td>
                </TR>
              );
            })}
        </tbody>
      </Table>
    </Wrapper>
  );
}

export default LandingPage;
