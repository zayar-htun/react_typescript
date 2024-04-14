import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
            <Greet name={"Zayyare"}  isLoggedIn={true} />
            <Person name={personName} />
            <PersonList nameArray={personList} />
            <Status status={"error"}/> 
            <Heading>PlaceHolder Text</Heading>
            <Oscar><Heading>Oscar winner - Dani Daniels</Heading></Oscar>
        </div>
    );
}

export default App;
