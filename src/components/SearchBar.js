import React from "react";

class SearchBar extends React.Component {
  // callback method handler
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="ui raised segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search..."
                // onChange prop that calls the onInputChange callback function
                onChange={this.onInputChange}
              />
              <i className="inverted circular search link icon" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
