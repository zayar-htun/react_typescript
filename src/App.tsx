import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name={"Zayyare"}/> 
      {/* true */}
      {/* <Greet name={10}/>  false because of number */}
     
    </div>
  );
}

export default App;
