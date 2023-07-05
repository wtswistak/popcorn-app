import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "good", "amazing", "awesome"]}
    />
    <StarRating maxRating={10} />
    <StarRating size={24} color="red" className="test" defaultRarting={3} /> */}
  </React.StrictMode>
);
