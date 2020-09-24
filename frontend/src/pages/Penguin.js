import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import client, { urlFor } from '../client';

function PenguinPage() {
  let { penguinId } = useParams();
  const [penguin, setPenguin] = useState(0);

  useEffect(() => {
    const query = '*[_type == "penguin" && _id == $penguinId][0] { species->, ... }';
    const params = { penguinId };
    client.fetch(query, params).then((penguin) => {
      console.log(`Got a penguin named ${penguin.name}`);
      console.log(penguin);
      setPenguin(penguin);
    });
  }, [penguinId]);

  return (
    <div>
      {penguin ? (
        <div>
          <h2>{penguin.name}</h2>
          <small>
            {penguin.species.name} &mdash; <em>{penguin.species.scientificName}</em>
          </small>

          <BlockContent blocks={penguin.description} />

          <div>
            {penguin.images &&
              penguin.images.map((image, i) => (
                <figure key={i}>
                  <img alt={image.caption} src={urlFor(image).width(200).url()} />
                  <figcaption>
                    {image.caption && image.caption}
                    {image.attribution && image.caption && <br />}
                    {image.attribution}
                  </figcaption>
                </figure>
              ))}
          </div>
        </div>
      ) : (
        <p>Finner frem pingvinen ...</p>
      )}
      <Link to={'/'}>Tilbake til alle pingvinene</Link>
    </div>
  );
}

export default PenguinPage;
