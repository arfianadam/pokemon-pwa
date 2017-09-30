import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { capitalizeFirstLetter } from 'helpers/polyfill';
import styles from './PokemonListCard.scss';

export default class PokemonListCard extends Component {
  static propTypes = {
    pokemon: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleError = e => {
    e.target.src = '/pokemon-notfound.png';
  }

  render() {
    const { pokemon } = this.props;
    return (
      <div className={styles.PokemonListCard}>
        <Card className={styles.card}>
          <CardMedia>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              onError={this.handleError}
            />
          </CardMedia>
          <CardTitle title={capitalizeFirstLetter(pokemon.name)} />
        </Card>
      </div>
    );
  }
}
