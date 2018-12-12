import React, { Component } from 'react';
import './App.css';
import FilteredListByGenderPresentation from './FilteredListByGenderPresentation';
import SearchByName from './SearchByName';

/* This list of cats that is passed into the SearchByName component.
 *
 * The cats are distinguished by name, sex (or gender presentation), breed,
 * age, and habitat.
 */
const cats = [
  {name: "Pickle", sex: "Masculine", breed: "Maine Coon", age: "5", habitat: "Outdoor"},
  {name: "Nugget", sex: "Feminine", breed: "Scottish Fold", age: "2", habitat: "Indoor"},
  {name: "Felicity", sex: "Androgynous", breed: "Ragdoll", age: "7", habitat: "Outdoor"},
  {name: "Pnut", sex: "Masculine", breed: "Cornish Rex", age: "1", habitat: "Indoor"},
  {name: "Fletcher", sex: "Feminine", breed: "Sphynx", age: "1", habitat: "Outdoor"},
  {name: "Chesty", sex: "Androgynous", breed: "La Perm", age: "5", habitat: "Indoor"},
  {name: "Cloud", sex: "Masculine", breed: "Persian", age: "10", habitat: "Outdoor"},
  {name: "Lionel", sex: "Feminine", breed: "Turkish Van", age: "6", habitat: "Indoor"},
  {name: "Roxy", sex: "Androgynous", breed: "Maine Coon", age: "4", habitat: "Outdoor"},
  {name: "Snoozy", sex: "Masculine", breed: "Ragdoll", age: "3", habitat: "Indoor"},
  {name: "Izzy", sex: "Feminine", breed: "Pixie Bob", age: "9", habitat: "Outdoor"},
  {name: "Gonzales", sex: "Androgynous", breed: "Persian", age: "12", habitat: "Indoor"},
  {name: "Tora", sex: "Masculine", breed: "Ragamuffin", age: "1", habitat: "Outdoor"},
  {name: "Billabong", sex: "Feminine", breed: "Bengal", age: "3", habitat: "Indoor"},
  {name: "Amber", sex: "Androgynous", breed: "Ragamuffin", age: "8", habitat: "Outdoor"}
]

class App extends Component {

  /* The method that renders the list of cats by throwing the list above into
   * a series of searching, filtering, and sorting Components. Each sub-component
   * renders relevant HTML items that are presented on the webpage.
   *
   * @return: a set of HTML elements
   */
  render() {
    return (
      <div className="App">
        <SearchByName className="entire-page" items={cats}/>
      </div>
    );
  }
}

export default App;
