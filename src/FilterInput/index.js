import React from "react";
/// Creates A list of random data using local json file.
import List from "./list.json";
import SearchFilter from "./SearchFilter.js";
import "./filterInput.css";

class FilterInput extends React.Component {
  state = {
    list: List,
    text: ""
  };
  /// Handles and updates text in text box.
  getInput = event => {
    this.setState({ text: event.target.value });
  };
  /// Populates list below text box filtering by substrings in box.
  populateList = () => {
    return SearchFilter(this.state.list.map(el => el.text), this.state.text);
  };

  render = () => {
    return (
      <div>
        <form className="Input">
          <input
            value={this.state.text}
            type="text"
            name="input"
            className="form-control filter"
            placeholder="Filter..."
            onChange={this.getInput}
          />
          <ul>{this.populateList().map(el => <li key={el.id}>{el}</li>)}</ul>
        </form>
      </div>
    );
  };
}

export default FilterInput;
