import React, { useState, useRef } from 'react';
import useScroll from '../hooks/useScroll';

const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;

  const intersectionElementRef = useRef();

  useScroll(intersectionElementRef, () => fetchTodos(page, limit));

  function fetchTodos(page, limit) {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then(response => response.json())
      .then(json => {
        setTodos(prev => [...prev, ...json]);
        setPage(prev => prev + 1);
      })
  }

  return (
    <>
      <div>
        {todos.map(todo => (
          <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
            {todo.id}. {todo.title}
          </div>
        ))}
      </div>
      <div ref={intersectionElementRef} style={{height: 20, background: 'green'}}></div>
    </>
  );
};

export default List;