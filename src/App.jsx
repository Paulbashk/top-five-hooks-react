import React from 'react';
import Hover from './components/Hover';
import List from './components/List';
import ListQuery from './components/ListQuery';
import ListRequest from './components/ListRequest';
import MemoComponent from './components/MemoComponent';
import NoMemoComponent from './components/NoMemoComponent';
import ReactMemo from './components/ReactMemo';
import useInput from './hooks/useInput';

function App() {
  const username = useInput('');
  const password = useInput('');

  return (
    <div>
      <h2>useInput</h2>
      <input {...username} type="text" placeholder='Username' />
      <input {...password} type="text" placeholder='Password' />
      <button onClick={() => console.log(username.value, password.value)}>Click</button>
      <h2>useMemo</h2>
      <h3>No Memo component - происходит перерендер всего компонента</h3>
      <NoMemoComponent />
      <h3>Memo component - перерендер конкретной части компонента</h3>
      <MemoComponent />
      <h2>React.memo</h2>
      <h3>React использовать результаты последнего рендеринга, без создания повторного рендеринга этого компонента (если нет состояний и прочего т.е. статичный компонент).</h3>
      <ReactMemo text="Текст какой-то" />
      <h2>useHover</h2>
      <Hover />
      <h2>useRequest (data, loading, error)</h2>
      <ListRequest />
      <h2>useDebounce (Search Todos)</h2>
      <ListQuery />
      <h2>useScroll (Observe scroll pagination)</h2>
      <List />
    </div>
  );
}

export default App;
