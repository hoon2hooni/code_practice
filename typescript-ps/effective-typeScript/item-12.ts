/**
 * 표현식과 선언식의 차이 부터 알아보자
 * 
 * 표현식 ->
 * function 함수명 { 
 *  구현 로직
 * }
 * 
 * 함수 표현식
 * const 함수명 = function() {
 *  로직
 * }
 * const 함수명 = (param) => {
 *  로직
 * }
 * 
 * 타입스크립트에서는 함수 표현식을 사용하는것이 좋다.
 * 함수의 매개변수부터 반환값까지 전체를 함수 타입으로 선언하여 함수 표현식에 재사용이 가능하다
 * 
 * 
 */
type DiceRollFn = (sides: number) => number;
//sides이미 number이라고 인식함 
const rollDice: DiceRollFn = sides => 3;

//함수 타입의 선언은 불필요한 반복을 줄일수 있다.

// function add(a: number, b: number):number { return a + b;}
function sub(a: number, b: number):number { return a - b;}
function mul(a: number, b: number):number { return a * b;}
function div(a: number, b: number): number { return a / b; }

type binaryFn = (a: number, b: number) => number;

function declarationAdd(a: number, b: number):number { return a + b;};
const expressionAdd: binaryFn = (a, b) => a + b; 

declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;

async function checkedFetch(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
  return response;
}

const expressionCheckedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
  return response;
}