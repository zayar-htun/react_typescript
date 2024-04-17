import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import IsLogined from "./components/state/IsLogined";
import User from "./components/state/User";
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
            {/* <Greet name={"Zayyare"}  isLoggedIn={true} />
            <Person name={personName} />
            <PersonList nameArray={personList} />
            <Status status={"error"}/> 
            <Heading>PlaceHolder Text</Heading>
            <Oscar><Heading>Oscar winner - Dani Daniels</Heading></Oscar> */}

            {/* <Button
                handleClick={(event, id) => {
                    console.log("Button Click", event);
                }}
            />
            <Input value="" handleChange={event => console.log(event)} /> */}
            {/* <Container
                styles={{ border: "1px solid black", padding: "1rem" }}
            /> */}
            {/* <IsLogined /> */}
            <User />
        </div>
    );
}

export default App;
