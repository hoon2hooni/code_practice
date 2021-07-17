/**
 * 
 * Generic  타입스크립트 공부
 */

/**
 * 
 *  any를 사용하는 것은 함수가 어떠한 것도 얻을수 있고 모든 arg의 
 * 모든 타입이 다 될수 있다. 결국 우리는 그 함수의 return값의 어떠한
 * 타입정보도 다 잃어버린다. 
 * 
 *
 * 
 */


function identity(arg:any): any {
  return arg;
 }

/**
 * 
 * @param arg 
 * 
 * 
 * 
 * @returns 
 */


function identityWithGeneric<T>(arg:T) :T {
  return arg
}
//첫번째 방법
let output = identityWithGeneric<string>("myString");

//두번째 방법
let output2 = identityWithGeneric("mystring")

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  //Property 'length' does not exist on type 'Type'.
  return arg;
}

function loggingIdentitySecondWay<Type>(arg: Array<Type>):Array<Type> {
  console.log(arg.length);
  //Property 'length' does not exist on type 'Type'.
  return arg;
}

loggingIdentity(1)

let myIdentity: <Input>(arg: Input) => Input = identity

let myIdentityTwo: {
  <Type>(arg: Type): Type
} = identity

interface GenericFn{
  <Type>(arg: Type) : void
} 

let happy: GenericFn = (love) => console.log(love);

function getProperty<Type, Key extends keyof Type>(obj: type, key: Key) {
  return obj[key]
}
getProperty({hello:"world"}, "hello")