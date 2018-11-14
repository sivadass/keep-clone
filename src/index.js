import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./components/pages/home";
import "./styles/index.scss";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
