{
  class Student {
    fullName: string;
    constructor(
      public firstName: string,
      public lastName: string,
      public school: string
    ) {
      this.fullName = firstName + lastName + school;
    }
  }

  interface Person {
    firstName: string;
    lastName: string;
  }

  function greeter(person: Person): string {
    return 'Hello,' + person.firstName + person.lastName;
  }

  let user = new Student('jan', 'love', 'None');
  console.log(greeter(user));
}
