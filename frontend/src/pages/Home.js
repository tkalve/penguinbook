import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import client from '../client';

function HomePage() {
  const [penguins, setPenguins] = useState(0);

  useEffect(() => {
    const query = '*[_type == "penguin"] | order(name)';
    client.fetch(query).then((penguins) => {
      console.log(`Got ${penguins.length} penguins`);
      setPenguins(penguins);
    });
  }, []);

  return (
    <div>
      {penguins ? (
        penguins.map((penguin, i) => (
          <li key={i}>
            <Link to={`/pingvin/${penguin._id}`}>{penguin.name}</Link>
          </li>
        ))
      ) : (
        <p>Laster pingviner ...</p>
      )}
    </div>
  );
}

export default HomePage;
