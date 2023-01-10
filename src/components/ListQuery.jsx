import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const ListQuery = () => {
  const [query, setQuery] = useState([]);
  const [value, setValue] = useState('');
  useDebounce(value, 500, () => search(value));

  function search(query) {
    if(query.length < 3) return;

    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}&_limit=10`)
      .then(response => response.json())
      .then(json => {
        setQuery(json);
        console.log(json);
      })
  }

  const onChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      {query.map(q => (
        <div key={q.id}>{q.id}. {q.title}</div>
      ))}
    </div>
  );
};

export default ListQuery;