import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import FilteredListByHabitat from './FilteredListByHabitat';

/* The FilteredListByGenderPresentation Component takes in the list of cats
 * filtered by the SearchByName component and filters out all cats that have the
 * type of gender presentation indicated by the user input
 */
class FilteredListByGenderPresentation extends Component {
  constructor(props) {
    super(props);

    // sex: stores the current choice of gender presentation the user indicated
    // filterDisplay: stores the text on the button to present to the user
    this.state = {
      sex: "",
      filterDisplay: "Nothing Specific"
    };
  }

  /* filterItem: checks if the current dropdown choice matches any given item's
   *             'sex' field
   *
   * @param: item - any given item in the list of cats passed into the Component
   * @return: a boolean - true if the item's sex field matches the state's
   *         sex field
   */
  filterItem = (item) => {
    // Checks if the current search term is contained in this item
    return (item.sex.search(this.state.sex) !== -1);
  }

  /* onDropdownChoice: sets the state of 'sex' to the input and sets the state
   *                   of 'filterDisplay' to relatively match the input
   *
   * @param: eventKey - the filtering type chosen by the user tied to the
   *                    eventKey of a MenuItem
   */
  onDropdownChoice = (eventKey) => {
    this.setState({sex: eventKey});
    // if the user wants to filter by nothing in particular
    if (eventKey == "") {
      this.setState({filterDisplay: "Nothing Specific"});
    // if the user wants to filter by masculine, feminine, or androgynous
    } else {
      var displayText = eventKey + " Features";
      this.setState({filterDisplay: displayText});
    }
  }

  /* render: creates the dropdown HTML elements for filtering by gender presentation
   *         and throws the filtered list of items into the FilteredListByHabitat
   *         Component for further filtering.
   *
   * @return: a set of HTML elements
   */
  render() {
    return (
      <React.Fragment>
        <div className="filter-list-by-gender dropdown">
          <h3>Filter Gender Presentation By:</h3>
          <DropdownButton bsStyle="info" className="dropdownBtn" title={this.state.filterDisplay}>
            <MenuItem eventKey="Masculine" onSelect={this.onDropdownChoice}>Masculine Features</MenuItem>
            <MenuItem eventKey="Feminine" onSelect={this.onDropdownChoice}>Feminine Features</MenuItem>
            <MenuItem eventKey="Androgynous" onSelect={this.onDropdownChoice}>Androgynous Features</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="" onSelect={this.onDropdownChoice}>Nothing Specific</MenuItem>
          </DropdownButton>
        </div>
        <FilteredListByHabitat items={this.props.items.filter(this.filterItem)} />
      </React.Fragment>
    );
  }
}

export default FilteredListByGenderPresentation;
