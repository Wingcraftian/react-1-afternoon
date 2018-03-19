import React, { Component } from 'react';

 class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredEmployees: []
    }
  }
   handleChange(val) {
    this.setState({ userInput: val });
  }
   // filter out the objects that dont have the correct
   // key aka haircolor only object 2 should show
   filterEmployees(userInput) {
    var employees = this.state.employees;
    var filteredEmployees = [];
    
    for ( var i = 0; i < employees.length; i++ ) {
      if ( employees[i].hasOwnProperty(userInput) ) {
        filteredEmployees.push(employees[i]);
      }
    }
// prop Didn't work switched to userInput and worked.
    this.setState({ filteredEmployees: filteredEmployees });
   }
   render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
}
  export default FilterObject;