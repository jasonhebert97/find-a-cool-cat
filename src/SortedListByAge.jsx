import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

/* The SortedListByAge Component takes in the list of cats filtered by
 * the FilteredListByHabitat component and sorts out all cats either by
 * youngest-to-oldest, oldest-to-youngest, or alphabetically (if the user
 * decides to sort by neither of the previous options).
 */
class SortedListByAge extends Component {

  constructor(props) {
    super(props);

    // btnState: the text that is displayed on the dropdown button
    // sortingMethod: the type of sorting the user indicated
    this.state = {
      btnState: "Nothing Specific",
      sortingMethod: ""
    };
  }

  /* onDropdownChoice: sets the state of 'sortingMethod' to the input and sets
   *                   the state of 'btnState' to relatively match the input
   *
   * @param: eventKey - the filtering type chosen by the user tied to the
   *                    eventKey of a MenuItem
   */
  onDropDownChoice = (eventKey) => {
    if (eventKey == "YoungToOld") {
      this.setState({btnState: "Young to Old"});
      this.setState({sortingMethod: eventKey});
    } else if (eventKey == "OldToYoung") {
      this.setState({btnState: "Old to Young"});
      this.setState({sortingMethod: eventKey});
    } else {
      this.setState({btnState: "Nothing Specific"});
      this.setState({sortingMethod: ""});
    }
  }

  /* sortItems: returns a sorting function that correlates to which way the
   *            user wants to sort the cats by.
   *
   * @return: a function used for sorting the list of elements
   */
  sortItems = () => {
    if (this.state.sortingMethod == "YoungToOld") {
      return this.props.items.sort(
        function (a,b) {
          return a.age - b.age;
        });
    } else if (this.state.sortingMethod == "OldToYoung") {
      return this.props.items.sort(
        function (a,b) {
          return b.age - a.age;
        });
    } else {
      return this.props.items.sort(
        function (a,b) {
          if (a.name < b.name) { return -1; }
          else if (a.name > b.name) { return 1; }
          else { return 0; }
        });
    }
  }

  /* render: creates the dropdown HTML elements for sorting by age
   *         and throws the filtered list of items into the List
   *         Component for presenting the final list  of cats to the user.
   *
   * @return: a set of HTML elements
   */
  render() {
    return (
      <React.Fragment>
        <div className="sorted-list-by-age dropdown">
          <h3>Sort Age By:</h3>
          <DropdownButton bsStyle="info" className="dropdownBtn" title={this.state.btnState}>
            <MenuItem eventKey="YoungToOld" onSelect={this.onDropDownChoice}>Youngest to Oldest</MenuItem>
            <MenuItem eventKey="OldToYoung" onSelect={this.onDropDownChoice}>Oldest to Youngest</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="NoSort" onSelect={this.onDropDownChoice}>Nothing Specific</MenuItem>
          </DropdownButton>
        </div>
        <List items={this.sortItems()} />
      </React.Fragment>
    );
  }
}

export default SortedListByAge;
