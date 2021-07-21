import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { useState } from "react";
import Card from "./components/card";

const App = () => {
  let [card, setCard] = useState([
    {
      cal: "100",
      title: "Pizza",
    },
    { cal: "300", title: "tandoori chap" },
    { cal: "70", title: "Macroni" },
    { cal: "84", title: "kurkure" },
    { cal: "240", title: "Dal makhni" },
    { cal: "99", title: "momos" },
    { cal: "52", title: "Cheese Paratha" },
  ]);

  function Delete(i) {
    const newCards = card.filter((el, index) => index !== i);
    setCard(newCards);
  }
  return (
    <div className="container">
      {card.map((items, index) => (
        <Card
          cal={items.cal}
          title={items.title}
          key1={index}
          key={index}
          func={Delete}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
