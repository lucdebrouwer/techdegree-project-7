import React, { Component } from "react";
import { withRouter } from "react-router";
class SearchForm extends Component {
  state = {
    searchText: ""
  };

  // Save user input as query
  handleOnSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };
  // If user submits the form and performs a "search"
  // Use the query for the search result
  // Pass search result back to App.js

  handleOnSubmit = e => {
    e.preventDefault();
    // Destructure the props from the route object and retrieve history which we need to set the path.
    const { history } = this.props;
    this.props.onSearch(this.state.searchText);

    // Retrieve the reference value
    let query = this.query.value;
    // Create a path and push the path into the history prop
    // By doing this the Route component will know to listen for a route that matches the search parameter.
    let path = `/search/${query}`;
    history.push(path);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleOnSubmit}>
          <input
            type="search"
            name="search"
            placeholder="Search"
            required
            /* Create a reference which we can use to build a path for the URL*/
            ref={input => {
              this.query = input;
            }}
            onChange={this.handleOnSearchChange}
          />
          <button className="search-button" type="submit">
            <svg
              fill="#fff"
              height="24"
              viewBox="0 0 23 23"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchForm);
