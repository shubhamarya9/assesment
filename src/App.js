import React, { Component } from "react";
import "./App.css";
import Students from "./components/Students";

import axios from "axios";
class App extends Component {
  state = {
    students: [],
    filtered: []
  };

  componentDidMount() {
    axios.get("https://www.hatchways.io/api/assessment/students").then(res => {
      this.setState({
        students: res.data.students,
        filtered: res.data.students
      });
    });
  }

  showChange = e => {
    const filterText = e.target.value;
    console.log(filterText);

    if (filterText === "") {
      this.setState({ filtered: this.state.students });
    }

    const originalList = this.state.students;
    const newList = originalList.filter(item => {
      return (
        item.firstName.toLowerCase() + item.lastName.toLowerCase()
      ).includes(filterText.toLowerCase());
    });
    this.setState({ filtered: newList });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Search by name"
          onChange={this.showChange}
          className="search"
        />
        <Students students={this.state.filtered} />
      </div>
    );
  }
}

export default App;
