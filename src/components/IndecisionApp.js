import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    showModal: false
  };

  componentDidMount() {
    console.log("fetching data");
    const options = JSON.parse(localStorage.getItem('options'));
    if (options) {
      this.setState(() => ({
        options: options
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("saving data");
      const jsonData = JSON.stringify(this.state.options);
      localStorage.setItem('options', jsonData);
    }
  }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  }

  handleDelete = (optionText) => {
    // console.log(optionText);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionText !== option;
      })
    }));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      showModal: true
    }));
    this.state.selectedOption = option;
  }

  handleAdd = (option) => {
    if (!option) {
      return "Please enter an option to add.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option is already added";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    });
  }

  clearModal = () => {
    this.setState(() => {
      return {
        showModal: false,
        selectedOption: undefined
      }
    });
  }

  render() {
    const title = 'Indescision App';
    const subtitle = 'Let this app decide what you need to do next.';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <AddOption handleAdd={this.handleAdd} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} changeState={this.changeState} handleDelete={this.handleDelete} />
        <OptionModal showModal={this.state.showModal} selectedOption={this.state.selectedOption} clearModal={this.clearModal} />
      </div>
    );
  }
}

export default IndecisionApp;