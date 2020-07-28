import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Player() {
  const [ player, setPlayer ] = useState();
  const { playerTag } = useParams();

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const response = await fetch('http://localhost:4000/players/' + encodeURIComponent(`#${playerTag}`));
        const data = await response.json();
        setPlayer(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPlayer();
  }, []);

  return (
    <div>
      <h1>Player Details</h1>
      {
        player ? <p>{JSON.stringify(player)}</p> : <p>loading</p>
      }
    </div>
  )
}
