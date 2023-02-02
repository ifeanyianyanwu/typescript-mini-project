import { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
    people: {
        name: string;
        age: number;
        url: string;
        note?: string;
    }[];
}

function App() {
    const [people, setPeople] = useState<IState["people"]>([]);

    return (
        <div className="App">
            <h1>People invited to my party</h1>
            <List people={people} />
            <AddToList people={people} setPeople={setPeople} />
        </div>
    );
}

export default App;
