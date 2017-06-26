import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
	players: [{
		name: 'Jim Hoskins',
	  score: 31,
		created: '11/8/2016',
		updated: '11/9/2016'
	},
	{
		name: 'Andrew Chalkley',
		score: 20,
		created: '11/9/2016',
		updated: '11/10/2016'
	},
	{
		name: 'Alena Holligan',
		score: 50,
		created: '11/11/2016',
		updated: '11/12/2016'
	}
	],
	selectedPlayerIndex: -1
}

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();


export default function Player(state=initialState, action) {
  switch(action.type) {
    case PlayerActionTypes.ADD_PLAYER:
    
    const AddPlayerList = [...state.players, {
      name: action.name,
      score: 0,
      created: `${month}/${day}/${year}`
    }];

      return {
        ...state,
        players: AddPlayerList
      };
      
    case PlayerActionTypes.REMOVE_PLAYER:
      const RemovePlayerList = [
        ...state.players.slice(0, action.index),
        ...state.players.slice(action.index + 1)
      ];

      return {
        ...state,
        players: RemovePlayerList
      };
      
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      const updatePlayersList = state.players.map((player, index) => {
        if(index === action.index) {
          return {
            ...player,
            score: player.score + action.score,
            updated: `${month}/${day}/${year}`
          };
        }
        return player;
      });

      return {
        ...state,
        players: updatePlayersList
      }
  
    
    case PlayerActionTypes.SELECT_PLAYER:
      return {
        ...state,
        selectedPlayerIndex: action.index
      }
      
    default:
      return state;
  }
}
