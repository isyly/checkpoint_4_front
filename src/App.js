import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import { Switch, Route } from "react-router-dom";
import InfiniteScroll from "./Components/InfiniteScroll/InfiniteScroll";
import Slider from "./Components/Slider/Slider";
import ConsoleGame from "./Components/ConsoleGame/ConsoleGame";
import Form from "./Components/Form/Form";
import "./app.css";


function App() {
  const [consoles, setConsoles] = useState([]);
  const [callAPI, setCallAPI] = useState(false);

  useEffect(() => {
    axios("http://localhost:8000/api/consoles").then((data) => {
      // console.log(data);
      setConsoles(data.data);
    });
  }, [callAPI]);

  return (
    <div>
      <NavBar />

      <Switch>
        <Route path="/create-console">
          <Form setCallAPI={setCallAPI} />
        </Route>

        <Route path="/InfiniteScroll">
          <InfiniteScroll />
        </Route>

        <Route path="/Slider">
          <Slider />
        </Route>

        <Route path="/">
          <div className="ConsoleGame_container">
            <div className="ConsoleGame_list">
              {consoles.map((console) => (
                <ConsoleGame key={`consoleGame_${console.id}`} {...console} />
              ))}
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
