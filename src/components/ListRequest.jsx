import React from 'react';
import useRequest from '../hooks/useRequest';

const ListRequest = () => {
  const [todos, loading, error] = useRequest(() => fetch(`https://jsonplaceholder.typicode.com/todos?_limit=30`).then(response => response.json()));

  if(loading) return <div style={{color: 'green'}}>Загрузка...</div>

  if(error) return <div style={{color: 'red'}}>Ошибка: {error}</div>

  return (
    <div>
        {todos.map(todo => (
          <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
            {todo.id}. {todo.title}
          </div>
        ))}
    </div>
  );
};

export default ListRequest;