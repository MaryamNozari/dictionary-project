import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Result from "./Result.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  function handleKeywordChang(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChang} />
      </form>
      <Result result={result} />
    </div>
  );
}
