import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }
  function serach() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // alert(`searching for ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    serach();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load(){
    setLoaded(true);
    serach();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
          </form>
          <div className="hint">suggested words: sunset, yoga, wine</div>
        </section>
        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
