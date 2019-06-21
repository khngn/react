import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { setAlert, searchUsers } = this.props;
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
    }
  };

  render() {
    const { showClearBtn, clearUsers } = this.props;
    const { text } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClearBtn && (
          <button
            className='btn btn-light btn-block'
            onClick={clearUsers}
            type='button'
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}
