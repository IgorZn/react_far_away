import './App.css';
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import {useState} from "react";
import {createInitialItems} from "./fakeData";

function App() {
    const [obj, setObj] = useState(createInitialItems);


    return (
        <div className="container-fluid">
            <Logo/>
            <Form setItems={setObj}/>
            <PackingList items={obj} setItems={setObj}/>
            <Stats />
        </div>
    );
}

export default App;
