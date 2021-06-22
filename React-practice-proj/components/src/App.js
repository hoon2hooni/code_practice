import logo from './logo.svg';
import './App.css';
import EachComment from './EachComment';
const arr = [1,2,3,4,5]
function App() {
  return (
    <div>
      {arr.map((id) => {
        return (<EachComment key={id} />)
      })}
    </div>
  );
}

export default App;
