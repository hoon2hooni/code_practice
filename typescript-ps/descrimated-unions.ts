// interface Shape {
//   kind: "circle" | "square";
//   radius?: number;
//   sideLength?: number;
// }
// const a:Shape ={
//   kind: "circle";
// }
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

function getArea2(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
                      
    case "square":
      return shape.sideLength ** 2;
              
  }
}

type token = string;
type response = {
  ok: boolean
}
type SuccessState = {
  response: {
    body: string;
  }
};

type FailState = {
  reason: string;
}
type LoginState = SuccessState | FailState
type Fail = false;

function login(id: string, token: token): SuccessState | FailState{
  if (id === token) {
    return {
      response: {
        body: "울랄라"
      }
    }
  }
  return {
    reason: "because of u"
  }
}
const reason  = "reason" in login("id","id" ) ? login("id","id") : {reason: "둘이 같은데?"}
console.log({ reason });