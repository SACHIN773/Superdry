import React from 'react';

function Pro({data}) {
  return (
    <div>
      <p>Paa the data</p>
      {data &&
        data.map((e) => (
          <li key={e.id}>
            <p>{e.title}</p>
          </li>
        ))}

    </div>
  );
}

export default Pro;
