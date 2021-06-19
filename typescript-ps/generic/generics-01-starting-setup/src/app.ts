{// Code goes here!
// const names: Array<string> = [];//

//promise는 자바스크립트 feature이다

//promise<unknown>
type Text = string
const promise: Promise<Text> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done");
  }, 2000);
});

//promise: Promise<number>
//dㅣ렇게 하면 split에 오류 생김!
promise.then(data => {
  data.split(' ');
})
  
}


