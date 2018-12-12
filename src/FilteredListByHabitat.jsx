import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import SortedListByAge from './SortedListByAge';

/* The FilteredListByHabitat Component takes in the list of cats filtered by
 * the FilteredListByGenderPresentation component and filters out all cats that
 * have the type of habitat indicated by the user input
 */
class FilteredListByHabitat extends Component {

  constructor(props) {
    super(props);

    // habitat: stores the current choice of habitat the user indicated
    // filterDisplay: stores the text on the button to present to the user
    this.state = {
      habitat: "",
      filterDisplay: "Nothing Specific"
    };
  }

  /* filterItem: checks if the current dropdown choice matches any given item's
   *             'habitat' field
   *
   * @param: item - any given item in the list of cats passed into the Component
   * @return: a boolean - true if the item's habitat field matches the state's
   *          habitat field
   */
  filterItem = (item) => {
    return (item.habitat.search(this.state.habitat) !== -1);
  }

  /* onDropdownChoice: sets the state of 'habitat' to the input and sets the state
   *                   of 'filterDisplay' to relatively match the input
   *
   * @param: eventKey - the filtering type chosen by the user tied to the
   *                    eventKey of a MenuItem
   */
  onDropDownChoice = (eventKey) => {
    this.setState({habitat: eventKey});
    if (eventKey == "") {
      this.setState({filterDisplay: "Nothing Specific"});
    } else {
      this.setState({filterDisplay: eventKey});
    }
  }

  /* render: creates the dropdown HTML elements for filtering by habitat
   *         and throws the filtered list of items into the SortedListByAge
   *         Component for sorting.
   *
   * @return: a set of HTML elements
   */
  render() {
    return (
      <React.Fragment>
        <div className="filter-list-by-habitat dropdown">
          <h3>Filter Habitat By:</h3>
          <DropdownButton bsStyle="info" className="dropdownBtn" title={this.state.filterDisplay}>
            <MenuItem eventKey="Outdoor" onSelect={this.onDropDownChoice}>Outdoor</MenuItem>
            <MenuItem eventKey="Indoor" onSelect={this.onDropDownChoice}>Indoor</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="" onSelect={this.onDropDownChoice}>Nothing Specific</MenuItem>
          </DropdownButton>
        </div>
        <SortedListByAge items={this.props.items.filter(this.filterItem)} />
      </React.Fragment>
    );
  }
}

export default FilteredListByHabitat;
