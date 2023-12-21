import React from 'react';
import {Component} from 'react';
import 'react-loader-spinner';
import { Hourglass } from 'react-loader-spinner';
import styles from './loader.module.css'

class Loader extends Component {
  render() {
      return (
          <div className={styles.loader}>
              <Hourglass
                  type="Hourglass"
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  colors={['#306cce', '#72a1ed']} />
          </div>
      )
  }
}

export default Loader;