{
  interface Person {
    firstName: string;
    lastName: string;
  }
 // Don't repeat yourself
  
  // interface PersonWithBirthDate {
  //   firstName: string;
  //   lastName: string;
  //   birthDate: string;
  // }

  interface PersonWithBirthDate extends Person{
    birthDate: string;
  }
  type Options = {
    
  }
  function get(url: string, opts: Options): Promise<Response> {
    console.log("logic")
  }

  type getUrl = function (url: string, opts: Options):Promise<Response>;
  const get: getUrl = (url, opts) => {
    
  }

  interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
  }

  interface topNav {
    userId: State['userId'];
    pageTitle: State['pageTitle'];
    recentFiles: State['recentFiles'];
  }

  type topNavBestWay = {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k];
  };

  type Pick<T, K extends keyof T> = { [k in K]: T[k] };
  type TopNavStateBestOfTheBest = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

  interface SaveAction {
    type: 'save';
    another: 'blahblah'
  }

  interface LoadAction {
    type: 'load';
    another: 'jjjjj'
  }

  type Action = SaveAction | LoadAction;

  type ActionType = Pick<Action, 'type'>;


}