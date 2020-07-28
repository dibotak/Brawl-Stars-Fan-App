import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [ players, setPlayers ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/rankings/global/players')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items[0]);
        setPlayers(data.items);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  /**
   * club
   * name
   * nameColor
   * rank
   * tag
   * trophies
   */

  return (
    <div>
      <h1>Brawl Stars Fan App</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Trophies</th>
            <th>Club</th>
          </tr>
        </thead>
        <tbody>
          {players && players.map((player) => (
            <tr key={player.tag}>
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.trophies}</td>
              <td>{player.club ? player.club.name : '()'}</td>
              <td>
                <Link to={`/player/${player.tag.slice(1)}`}>Details</Link>
              </td>
            </tr>
          ))}
          {isLoading && (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
