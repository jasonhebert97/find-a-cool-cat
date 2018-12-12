import React, { Component } from 'react';
import FilteredListByGenderPresentation from './FilteredListByGenderPresentation';

/* The SearchByName Component takes in the list of cats created in App.js and
 * filters out all cats that have a name containing any of the text input by
 * the user in the search bar.
 */
class SearchByName extends Component {

  constructor(props) {
    super(props);

    // search: stores the input of the user to compare to the list of cats
    this.state = {
      search: ""
    };
  }

  /* onSearch: sets the state of 'search' to the value input by the user in
   *           the search bar
   *
   * @param: event - the text input from the user
   */
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  /* filterItem: Checks if the current search term is contained in this item
   *
   * @param: item - any given item within the list of cats
   * @return: a boolean - true if the current search term is contained
   *          in the item, false otherwise
   */
  filterItem = (item) => {
    return (item.name.toLowerCase().search(this.state.search) !== -1);
  }

  /* render: creates the title and input search bar HTML elements and throws
   *         the filtered list of items into the FilteredListByGenderPresentation
   *         Component for further filtering.
   *
   * @return: a set of HTML elements
   */
  render() {
    return (
      <React.Fragment>
        <div className="search-items">
          <h1>Find a Cool Cat</h1>
          <input type="text" className="search-input" placeholder="Search Name" onChange={this.onSearch} />
        </div>
        <FilteredListByGenderPresentation items={this.props.items.filter(this.filterItem)}/>
      </React.Fragment>
    );
  }
}

export default SearchByName;
