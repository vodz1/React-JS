import { Component } from "react";

class DynamicInput extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
    };
  }

  getData = (e) => {
    this.setState({ textInput: e.target.value });
  };

  clearInput = () => {
    this.setState({ textInput: "" });
  };

  render() {
    return (
      <div className="container mt-5 shadow-lg rounded-lg w-1/2 py-5 border mx-auto text-center">
        <label htmlFor="text" className="text-lg font-semibold mx-2">
          Text
        </label>
        <input
          type="text"
          name="text"
          value={this.state.textInput}
          onChange={this.getData}
          placeholder="Enter any Text.."
          className="ml-5 mb-5 w-1/2 rounded-lg px-2 py-1 border"
        />
        <p className="mb-5">
          Output : <span className="italic">{this.state.textInput}</span>
        </p>
        <button
          onClick={this.clearInput}
          type="button"
          className="btn btn-dark bg-black text-white py-2 px-4 rounded-lg"
        >
          Clear
        </button>
      </div>
    );
  }
}

export default DynamicInput;
