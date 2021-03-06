import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { loadListType } from 'redux/modules/type';
import PokemonTypeDummy from 'components/PokemonTypeDummy';

@connect(state => ({
  type: state.type
}))
export default class PokemonType extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    type: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch, type } = this.props;
    if (!type.allLoaded) {
      dispatch(loadListType(1, 60, true));
    }
  }

  navigateTo = path => {
    const { dispatch } = this.props;
    dispatch(push(path));
  }

  render() {
    const { type } = this.props;
    return (
      <PokemonTypeDummy
        type={type.type}
        navigateTo={this.navigateTo}
      />
    );
  }
}
