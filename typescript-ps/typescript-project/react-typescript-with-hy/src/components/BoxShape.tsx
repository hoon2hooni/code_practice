import { SIGXFSZ } from 'constants';
import React from 'react';
import { serialize } from 'v8';

interface Props {
  size: 1 | 2 | 3 | 4 | 5 | undefined;
  selfPop: () => void,//setBoxList
  stackOther: () => void,//setPopList
}



const color = ['red', 'blue', 'green', 'yellow', 'orange'];

const BoxShape: React.FC<Props> = ({
  size,
  selfPop,
  stackOther
}) => {
  return (
    <div>
      <div
        className='box'
        style={{
          width: `${size * 2}rem`,
          height: `${size * 2}rem`,
          border: '2px solid black',
          backgroundColor: `${color[size - 1]}`,
        }}
        onClick={() => {
          // filter함수에도 (size, idx) 있는데 그 idx와 위의 박스의 idx가 같은 경우 제거!!!
          selfPop();
          stackOther();
        }}>
        <div className='text'>{size}</div>
      </div>
    </div>
  );
};

export default BoxShape;
