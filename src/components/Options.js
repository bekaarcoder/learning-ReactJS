import React from 'react';
import Option from './Option';

// Class based Component
class Options extends React.Component {
  render() {
    return (
      <div className='row text-center mb-3 justify-content-center'>
        <div className="col-md-6">
          {this.props.options.length > 0 ?
            <div>
              <ul className="list-group mb-3 mt-3">
                {
                  this.props.options.map(option => {
                    return <Option key={option} optionText={option} handleDelete={this.props.handleDelete} />
                  })
                }
              </ul>
              <button className='btn btn-danger' onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div> :
            <p className="mb-3 mt-3">No options to display</p>
          }
        </div>
      </div>
    )
  }
}

export default Options;