{// Code goes here!
  // const names: Array<string> = [];//

  //promise는 자바스크립트 feature이다

  //promise<unknown>
  // type Text = string
  // const promise: Promise<Text> = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("this is done");
  //   }, 2000);
  // });

  // //promise: Promise<number>
  // //dㅣ렇게 하면 split에 오류 생김!
  // promise.then(data => {
  //   data.split(' ');
  // })
  
  // }

  
  //T extends object 하게되면 T는 object 타입 어떤것이든 상관 없음

  // function merge<T extends object, U extends string[]>(objA: T, objB: U) {
  //   return Object.assign(objA, objB);
  // }
  
  // console.log(merge({name:'MAx', love: ['idonno']},["안녕하세요"]));

  // interface Lengthy {
  //   length: number
  // }
  
    
  
  // function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  //   let descriptionText: string = 'Got no value';
  //   if (element.length === 1) {
  //     descriptionText = `Got ${element.length} elements`
  //   }
  //   return [element, descriptionText]
  // }
  function extractKeyandValue<T extends object, U extends keyof T>(obj: T, key: U) {
    let value = obj[key]
    return value
  }
  console.log(extractKeyandValue({ name: "love" }, "name"))

}
  

  


