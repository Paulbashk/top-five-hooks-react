import React, { useState } from "react";

const sum = n => {
	return n + n
 };


const NoMemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const result = sum(num);

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
export default NoMemoComponent;
