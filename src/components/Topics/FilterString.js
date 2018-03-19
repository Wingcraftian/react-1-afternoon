import React, { Component } from 'react';

class FilterString extends Component {
  constructor(){
    super();
    this.state = {
      names: ['James','Jessica',"Melody", 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filteredNames: []
    };
   }
  //Filter out and object with the correct letters in the box for example
  // if they type Bl get rid of 'Blake'
    handleChange(val) {
      this.setState({userInput: val}) ;
    } 
    filterNames(userInput) {
   var names = this.state.names;
  var newArray = [];
   for(let i = 0; i < names.length; i++){
   if (names[i] !== userInput){
     newArray.push(names[i])
   }
   this.setState({ filteredNames: newArray, names: names})
 }
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify
        (this.state.names, null, 10) }</span>
        <input className="inputLine" onChange={ (e) => this.handleChange
        (e.target.value) }></input>
        <button className="confirmationButton" onClick={ () =>
        this.filterNames(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: {
          JSON.stringify(this.state.filteredNames, null, 10) }</span>
      </div>
    )
  }
}

export default FilterString;