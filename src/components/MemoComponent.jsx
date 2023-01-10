import React, { useState, useMemo } from "react";

const sum = n => {
	return n + n
 };

/*
  Каждый раз, когда мы кликаем по тексту, происходит вызов setIsGreen, что приводит к перерендериванию компонента и, 
  как следствие, повторный вызов функции sum(), хотя данный функционал не задействован и должен вызываться только по клику на кнопку +. 
  Данное вычисление сейчас происходит при каждом рендере компонента, что с точки зрения оптимизации не эффективно. 
  Для того, чтобы оптимизировать (мемоизавать) такие промежуточные вычисления требуется хук useMemo. 
  Оборачиваем функцию sum() в useMemo и передаем вторым параметром в массиве num как зависимость, 
  при изменении значения которой происходит повторный вызов функции sum().
*/

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const result = useMemo(() => sum(num), [num]);
 
 return (
    <div style={{display: 'flex'}}>
      <h4 onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "green" : "red" }}
      >
        Example
      </h4>
      <h4>
        Sum {result}
      </h4>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};

export default MemoComponent;