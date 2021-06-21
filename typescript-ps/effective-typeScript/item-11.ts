interface Options {
  title: string;
  darkMode?: boolean;
}

function setDarkMode(): void {
  console.log("startDarkMode")
}
function createWindow(options: Options) {
  if (options.darkMode) {
    setDarkMode()
  }
}

createWindow({
  title: 'spideer',
  
  // darkmode = true; 하면 타입체크되서 가능 ㅎ
})

const o1: Options = document;
const intermediate = { darkmode : true, title : 'ski' }
//darkmode 여도  에러 안뜸
const o: Options = intermediate; //이렇게 매개변수두면 darkmode 오타나도 체크 못함
// const o2: Options = {darkmode: true, title: 'ski'} // 이렇게 객체 리터럴로 하면 체크 가능

