import React from 'react';

/*
  Таким образом мы говорим React использовать результаты последнего рендеринга, без создания повторного рендеринга этого компонента.
*/

const ReactMemo = ({text}) => <div>{text}</div>;
export default React.memo(ReactMemo);