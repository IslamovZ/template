import React from "react";
import ReactDOM, {render} from "react-dom";
import { Router, Link } from "@reach/router"

let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>

ReactDOM.render(<Router>
    <Home path="/" />
    <Dash path="/dashboard" />
  </Router>, document.getElementById("root")
);
