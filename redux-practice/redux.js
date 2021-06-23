const createPolicy = (name, amount) => {
  return{//Action(a form in our anoalogy)
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount,
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload:{
      name,
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return{//Action(a form in our anoalogy)
    type: 'CREATE_POLICY',
    payload: {
      name,
      amountOfMoneyToCollect,
    }
  };
};

console.clear();
//Reducers (Departments!)

const claimHistory = (oldListOfClaims = [], action) => { //prevent default 
  if (action.type === 'CREATE_CLAIM') {
    // we care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }
  
  //we don't care the action (form!!)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
}