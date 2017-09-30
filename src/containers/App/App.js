import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import config from 'config';

import Header from 'containers/Header';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  render() {
    const { children, location } = this.props;
    const styles = require('./App.scss');

    return (
      <MuiThemeProvider>
        <div className={styles.app}>
          <Helmet {...config.app.head} />
          <Header path={location.pathname} />
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}
