class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAdd = this.handleAdd.bind(this); 
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      options: props.options
    };
  }

  componentDidMount() {
    console.log("fetching data");
    const options = JSON.parse(localStorage.getItem('options'));
    if(options) {
      this.setState(() => ({
        options: options
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      console.log("saving data");
      const jsonData = JSON.stringify(this.state.options);
      localStorage.setItem('options', jsonData);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }));
  }

  handleDelete(optionText) {
    // console.log(optionText);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionText !== option;
      })
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAdd(option) {
    if(!option) {
      return "Please enter an option to add.";
    } else if(this.state.options.indexOf(option) > -1) {
      return "This option is already added";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    });
  }

  render() {
    const title = 'Indescision';
    const subtitle = 'Let this app decide what you need to do next.';
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
      <AddOption handleAdd={this.handleAdd} />
      <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} changeState={this.changeState} handleDelete={this.handleDelete} />
    </div>
    );
  }
}

// default props
IndecisionApp.defaultProps = {
  options: []
};

// Stateless Functional Component
const Header = (props) => {
  return (
    <div className='text-center mt-3'>
      <h1>{props.title}</h1>
      <p className='text-muted'>{props.subtitle}</p>
    </div>
  );
}

/* class Header extends React.Component {
  render() {
    return (
      <div className='text-center mt-3'>
        <h1>{this.props.title}</h1>
        <p className='text-muted'>{this.props.subtitle}</p>
      </div>
    );
  }
} */

// Stateless functional component
const Action = (props) => {
  return (
    <div className='text-center mb-3'>
      <button className='btn btn-success btn-sm' onClick={props.handlePick} disabled={!props.hasOptions}>What should I do next?</button>
    </div>
  );
}

/* class Action extends React.Component {
  render() {
    return (
      <div className='text-center mb-3'>
        <button className='btn btn-success btn-sm' onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do next?</button>
      </div>
    );
  }
} */

// Class based Component
class Options extends React.Component {
  /* constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(optionItem) {
    this.props.options.forEach((option, index) => {
      if(optionItem.textContent === option) {
        this.props.options.splice(index, 1);
      }
      // console.log(this.props.options);
      this.props.changeState(this.props.options);
    });
  } */

  render() {
    return (
      <div className='row text-center mb-3 justify-content-center'>
        <div className="col-md-6">
          {this.props.options.length > 0 ?
            <div>
            <ul className="list-group mb-3 mt-3">
            {
              this.props.options.map(option => {
                return <Option key={option} optionText={option} handleDelete={this.props.handleDelete}/>
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

// Class based Component
class Option extends React.Component {
  /* constructor(props) {
    super(props);
    this.deleteOption = this.deleteOption.bind(this);
  }
  deleteOption(e) {
    // console.log(e.target.parentElement.parentElement.classList);
    if(e.target.parentElement.parentElement.classList.contains('delete-option')) {
      // console.log(e.target.parentElement.parentElement.parentElement);
      this.props.handleDelete(e.target.parentElement.parentElement.parentElement);
    }
  } */
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.props.optionText}
        <a className="delete-option" onClick={(e) => {this.props.handleDelete(this.props.optionText)}}>
          <i className="fas fa-trash-alt text-danger"></i>
        </a>
      </li>
    );
  }
}

// Class based Component
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.optionSubmit = this.optionSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }
  optionSubmit(e) {
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

ReactDOM.render(<IndecisionApp options={['This is an example. Remove this. Add another.']} />, document.getElementById('app'));