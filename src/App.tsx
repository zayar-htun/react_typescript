import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
    const personName = {
        first: "Zayar",
        last: "Tun",
    };
    const personList = [
        { first: "Zayar", last: "Tun" },
        { first: "Htet", last: "Aung" },
        { first: "Bar", last: "Black" },
        { first: "Ma", last: "Kairi" },
    ];
    return (
        <div className="App">
            <Greet name={"Zayyare"} messageCount={100} isLoggedIn={true} />
            <Person name={personName} />
            <PersonList nameArray={personList} />
        </div>
    );
}

export default App;
