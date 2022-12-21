import React, { Component } from "react";

export default class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  filterUserTypes = () => {
    const data = this.state.userData;
    const mapRows = data
      .filter(function (e) {
        return e.user_type === "Designer";
      })
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
    return mapRows;
  };

  filterWithStartingAsJ = () => {
    const data = this.state.userData;
    const mapRows = data
      .filter(function (e) {
        return e.name[0] === "J";
      })
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
    return mapRows;
  };

  filterByAge = () => {
    const data = this.state.userData;
    const mapRows = data
      .filter(function (e) {
        return e.age > 28 && e.age <= 50;
      })
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
            <span>Id: {item.id}</span>
            <span>Name : {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
    return mapRows;
  };

  countAge = () => {
    const data = this.state.userData;
    const mapRows = data
      .filter(function (e) {
        return e.user_type == "Designer";
      })
      .map((item) => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            <span>{item.age - item.years}</span>
          </li>
        </React.Fragment>
      ));
    return mapRows;
  };

  render() {
    return (
      // instead of a parent div tag, we can also use React.Fragment
      <React.Fragment>
        <h1>DISPLAY ALL ITEMS</h1>
        <div className="display-box">
          <ul>{this.renderItems()} </ul>
        </div>

        <h1>LIST ALL DATA BASED ON USERTYPE</h1>
        <div className="display-box">
          <ul>{this.filterUserTypes()} </ul>
        </div>

        <h1>FILTER ALL DATA STARTING WITH THE LETTER 'J'</h1>
        <div className="display-box">
          <ul>{this.filterWithStartingAsJ()} </ul>
        </div>

        <h1>FILTER DATA BASED ON AGE</h1>
        <div className="display-box">
          <ul>{this.filterByAge()} </ul>
        </div>

        <h1>FIND THE TOTAL EXPERIENCE OF THE DESIGNERS</h1>
        <div className="display-box">
          <ul>{this.countAge()} </ul>
        </div>
      </React.Fragment>
    );
  }
}
