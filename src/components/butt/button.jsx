import React ,  { Component } from 'react';
import styles from './button.module.css';
class Button extends Component {
  handleClick = (event) => {
      event.preventDefault();
      const { onClick } = this.props;
      onClick();
  }

  render() {
      return (
          <button
              className={styles.button}
              onClick={this.handleClick}>
              Load More
          </button>
      )
  }
}

export default Button;