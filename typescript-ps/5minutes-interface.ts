{
  interface Person {
    firstName: string;
    lastName: string;
  }

  function greeter(person: Person) {
    return 'hello,' + person.firstName + ' ' + person.lastName;
  }

  let user: Person = { firstName: 'Jan', lastName: 'love' };
  console.log(greeter(user));
}
