import React from 'react';
import styled from 'styled-components';
import BoxShape from './BoxShape';

const Root = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .box-left-container {
    min-height: 800px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .box-right-container {
    min-height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

interface BoxStackProps {}
type BoxSize = 1 | 2 | 3 | 4 | 5| undefined;
type BoxList = Array<BoxSize>;

const BoxStack: React.FC<BoxStackProps> = () => {
  const [boxList, setBoxList] = React.useState<BoxList>([]);
  const [temp, setTemp] = React.useState<number>(1);
  const [popList, setPopList] = React.useState<BoxList>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemp(+e.target.value);
  };

  return (
    <Root>
      <div>
        <div>
          <input
            type='number'
            min={1}
            max={5}
            onChange={onChange}
            value={temp}
          />
          <button onClick={() => setBoxList(() => [...boxList, temp])}>
            상자쌓기!
          </button>
        </div>
        <div className='box-left-container'>
          {boxList.map((arr, idx) => (
            <div>
              <BoxShape
                size={arr}
                selfPop={() => setBoxList(boxList.filter((arr, index) => index !== idx))}
                stackOther={() => setPopList(()=>[...popList, arr])} />
            </div>
          ))}
        </div>
      </div>
      <div className='box-right-container'>
        {popList.map((arr, idx) => (
          <div>
            <BoxShape
              size={arr}
              stackOther={() => { }}
              selfPop={() => setPopList(popList.filter((arr, index) => index !== idx))}
            />
        </div>
          // <div
          //   className='box'
          //   key={'pop' + idx}
          //   style={{
          //     width: `${arr * 2}rem`,
          //     height: `${arr * 2}rem`,
          //     border: '2px solid black',
          //     backgroundColor: `${color[arr - 1]}`,
          //   }}
          //   onClick={() => {
          //     // filter함수에도 (arr, idx) 있는데 그 idx와 위의 박스의 idx가 같은 경우 제거!!!
          //     setPopList(popList.filter((arr, index) => index !== idx));
          //   }}>
          //   <div className='text'>{arr}</div>
          // </div>
        ))}
        {console.log(popList)}
      </div>
    </Root>
  );
};

export default BoxStack;


