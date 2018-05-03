class Header extends React.Component {
  render() {
    return (
      <div className='text-center mt-3'>
        <h1>{this.props.title}</h1>
        <p className='text-muted'>{this.props.subtitle}</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div className='text-center mb-3'>
        <button className='btn btn-success btn-sm' onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do next?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div className='text-center mb-3'>
        {
          this.props.options.map(option => {
            return <Option key={option} optionText={option} />
          })
        }
        <button className='btn btn-danger' onClick={this.props.handleDeleteOptions}>Remove All</button>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>{this.props.optionText}</li>
    );
  }
}

class AddOption extends React.Component {
  optionSubmit(e) {
    e.preventDefault();
    let optionVal = e.target.elements.option.value.trim();
    if(optionVal != "") {
      alert(optionVal);
    }
  }
  render() {
    return (
      <div className='row justify-content-center'>
        <form className='form-inline' onSubmit={this.optionSubmit}>
          <input type='text' name='option' className='form-control mr-3' />
          <button className='btn btn-primary'>Add Option</button>
        </form>
      </div>
    )
  }
}

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['one', 'erbfkjrg']
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const title = 'Indescision App';
    const subtitle = 'Let this app decide what you need to do next.';
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
      <AddOption />
      <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
    </div>
    );
  }
}

/* const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
) */

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));