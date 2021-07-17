type Point = { x: number; y: number };
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

//type M = string | number

/**
 * M타입의 경우 string | number이다 왜냐하면 
 * 이건 자바스크립트의 특징 떄문인데 object의 keyㄷ르의 경우 
 * 항상 string으로 강제된다 즉 obj[0] 의 경우 obj["0"] 이렇게 된다
 * 
 */




