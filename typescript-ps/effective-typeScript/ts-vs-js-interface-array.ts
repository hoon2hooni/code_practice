interface State {
  name: string;
  capital: string;
}

const states: State[] = [
  {
    name: 'Alabama',
    capital: 'Montgomery'
  }
]

for (const state of states) {
  console.log(state.capital);
}