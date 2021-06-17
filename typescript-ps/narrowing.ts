// function padLeft(padding: number | string, input: string): string {
//   throw new Error("Not implemented yet!");
// }

// function padLeft(padding: number | string, input: string) {
//   return new Array(padding + 1).join(" ") + input;
// }

//Operator '+' cannot be applied to types 'string | number' and 'number'.


// function padLeft(padding: number | string, input: string) {
//   if (typeof padding === "number") {
//     return new Array(padding + 1).join(" ") + input;

//   }
//   return padding + input;
// }


function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}
console.log(getUsersOnlineMessage(3));


function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
        
  } else {
    console.log(x);
              
    console.log(y);
              
  }
}

// interface Container {
//   value: number | null | undefined;
// }
interface Container {
  value: null | undefined | number;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}


type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = {  swim?: () => void, fly?: () => void };

function move(animal: Fish | Bird| Human) {
  if ("swim" in animal) {
    return animal
  }

  return animal
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});