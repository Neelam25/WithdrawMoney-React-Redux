import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store";

const render = () => ReactDOM.render(<App />, document.getElementById("root"));

render();
store.subscribe(render);
