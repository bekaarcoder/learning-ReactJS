import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={props.showModal}
    contentLabel="Selected Option"
    onRequestClose={props.clearModal}
    className="Modal"
  >
    <h4>Yor time has come to do what has been chosen</h4>
    <p className="text-danger"><strong>{props.selectedOption}</strong></p>
    <button className="btn btn-primary" onClick={props.clearModal}>Let's Do This!</button>
  </Modal>
);

export default OptionModal;