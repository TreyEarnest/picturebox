import React from "react";

class SearchBar extends React.Component {
  // initialing the state term
  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui raised segment">
        <form className="ui form" onSubmit={event => this.onFormSubmit(event)}>
          <div className="field">
            <label>Image Search</label>
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search..."
                // Controlled component
                // this is done so that react drives the data and not HTML
                // updating the state with the string typed into the input field
                onChange={e => this.setState({ term: e.target.value })}
                // value if the text entered into the input field
                value={this.state.term}
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
