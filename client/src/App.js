import React, { useState, useEffect } from "react";
import api from "./components/api";
import './App.css';
import './assets/styles/list.css'


const App = () => {

  const [data, SetData] = useState([]);

  useEffect(() => {
    api
      .scrapIt()
      .then((res) => {
        SetData(res.data.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      {Object.keys(data).map((index) => {
            return (
              <div key={index} className="list">
                <h2 className="title">{data[index].title}</h2>
                <p className="answer">{data[index].value}</p>
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;
