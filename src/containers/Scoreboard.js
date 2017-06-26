import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
// import PlayerDetail from '../components/PlayerDetail';

class Scoreboard extends React.Component {
    constructor(props) {
      super(props);

      
    }

  render() {
    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ));
    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
        
        <div className="player-detail">
          {/* <PlayerDetail /> */}
        </div>
      </div>
    );
  }
}

Scoreboard.propTypes = {
  players: PropTypes.array.isRequired
};

const mapStateToProps = state => (
  {
    players: state.players
  }
);

export default connect(mapStateToProps)(Scoreboard);
