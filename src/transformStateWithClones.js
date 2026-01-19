'use strict';

/**
/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let currentState = state;
  const history = [];

  for (const action of actions) {
    let nextState;

    switch (action.type) {
      case 'clear':
        nextState = {};
        break;

      default:
        nextState = { ...currentState };
        break;
    }

    switch (action.type) {
      case 'removeProperties':
        if (Array.isArray(action.keysToRemove)) {
          for (const key of action.keysToRemove) {
            delete nextState[key];
          }
        }
        break;

      case 'addProperties':
        if (typeof action.extraData === 'object' && action.extraData !== null) {
          Object.assign(nextState, action.extraData);
        }
        break;
    }

    history.push(nextState);
    currentState = nextState;
  }

  return history;
}

module.exports = transformStateWithClones;

module.exports = transformStateWithClones;
