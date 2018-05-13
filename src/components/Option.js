import React from 'react';

// Class based Component
export default class Option extends React.Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.props.optionText}
        <a className="delete-option" onClick={(e) => { this.props.handleDelete(this.props.optionText) }}>
          <i className="fas fa-trash-alt text-danger"></i>
        </a>
      </li>
    );
  }
}