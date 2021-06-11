//reference-url https://www.typescriptlang.org/docs/handbook/2/everyday-types.html 

type ID = number | string;
//difference betwwen interface


interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear();
bear.name
bear.honey
        


type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: Boolean 
}

const bear = getBear();
bear.name;
bear.honey;
        

interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
        
// type Window = {
//   title: string
// }

// type Window = {
//   ts: TypeScriptAPI
// }


//type assertion 
//형 변환과는 다르다 타입이 이것이다라고 명확하게 컴파일러엑 명시함 
declare function handleRequest(url: string, method: "GET" | "POST"): void;
// ---cut---
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");