import React, { useState, useEffect } from "react";
import api from "./components/api";
import './App.css';
import './assets/styles/list.css'


const App = () => {

  const [data, SetData] = useState([]);
  const [dataText, SetDataText] = useState([]);

  useEffect(() => {
    api
      .scrapIt()
      .then((res) => {
        SetData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .scrapFromText()
      .then((res) => {
        SetDataText(res.data.data);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div><h1>Desde la api haciendo Scrapping</h1></div>
      {Object.keys(data).map((index) => {
            return (
              <div key={index} className="list">
                <h2 className="title">{data[index].title}</h2>
                <p className="answer">{data[index].value}</p>
              </div>
            );
          })}

          <div><h1>Desde la api leyendo desde el txt</h1></div>
          {Object.keys(dataText).map((indexText) => {
            return (
              <div key={indexText} className="list">
                <h2 className="title">{dataText[indexText].title}</h2>
                <p className="answer">{dataText[indexText].value}</p>
              </div>
            );
          })}

      </header>
    </div>
  );
}

export default App;
