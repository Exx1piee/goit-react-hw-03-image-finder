import React from 'react';
import { Component } from 'react';
import styles from './searchbar.module.css';

class Searchbar extends Component {
  state = {
      query: '',
  };

  handleChange = (event) => {
      this.setState({ query: event.target.value })
  };

  handleSubmit = (event) => {
      event.preventDefault()
      const { query } = this.state
      this.props.onSubmit(query)
  };

  render() {
      const { query } = this.state

      return (
          <header className={styles.header}>
              <form
                  className={styles.form}
                  onSubmit={this.handleSubmit}>
                  <button
                      className={styles.button}
                      type="submit">
                      <span className={styles.span}>Search</span>
                  </button>

                  <input
                      className={styles.input}
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                      value={query}
                      onChange={this.handleChange} />
              </form>
          </header>
      )
  }
}

export default Searchbar;