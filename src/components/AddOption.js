import React from 'react';

// Class based Component
export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  optionSubmit = (e) => {
    e.preventDefault();
    let optionVal = e.target.elements.option.value.trim();
    const error = this.props.handleAdd(optionVal);
    this.setState(() => {
      return {
        error: error
      }
    });
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <div className='row justify-content-center'>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <form className='form-inline justify-content-center' onSubmit={this.optionSubmit}>
                <input type='text' name='option' className='form-control mr-3' />
                <button className='btn btn-primary'>Add Option</button>
              </form>
            </div>
          </div>
          {this.state.error &&
            <div className="row justify-content-center mt-2">
              <p className="text-danger">{this.state.error}</p>
            </div>
          }
        </div>
      </div>
    )
  }
}