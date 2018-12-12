import React, { Component } from 'react';

/*
The list component will take the list of items passed in as a property
and create an HTML list with those item. In this example, we are passing in the
filtered produce list, but this component can be used for other types of items
as long as it has a name.
*/
class List extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  /* renderList: maps across all cats passed into the component ('props') and
   *             produces HTML elements that present the cat and all its
   *             characteristics (both image and traits) to the user.
   *
   * @return: a set of HTML elements
   */
  renderList() {
    const items = this.props.items.map(item => {
      return (<div className="listing">
        <div class="listing-image">
          <img src={ require( './images/' + item.name + '.png' ) }/>
        </div>
        <div class="listing-text">
          <h2>{item.name}</h2>
          <p><b>Age:</b> {item.age}</p>
          <p><b>Gender Presentation:</b> {item.sex}</p>
          <p><b>Breed:</b> {item.breed}</p>
          <p><b>Habitat:</b> {item.habitat}</p>
        </div>
      </div>);
    });
    return items;
  }

  /* render: creates the dropdown HTML elements for all cats that have made it
   *         through all of the searching, filtering, and sorting components
   *
   * @return: a set of HTML elements
   */
  render() {
    return (
      <div className="cat-listing">
        <div className="divider"></div>
        {this.renderList()}
      </div>
    );
  }
}

export default List;
