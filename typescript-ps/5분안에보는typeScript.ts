function greeter(person: number): string{
  return "hello, " + `${person}`;
}

//배열 안에 들어가있는 *타입[]*
let user: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

console.log(user
  .map(aUser => greeter(aUser)));

interface Person {
  firstName: string;
  lastName: string;
}
