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

    if (action.type === 'clear') {
      nextState = {};
    } else {
      nextState = { ...currentState };
    }

    if (
      action.type === 'removeProperties' &&
      Array.isArray(action.keysToRemove)
    ) {
      for (const key of action.keysToRemove) {
        delete nextState[key];
      }
    }

    if (
      action.type === 'addProperties' &&
      typeof action.extraData === 'object' &&
      action.extraData !== null
    ) {
      Object.assign(nextState, action.extraData);
    }

    history.push(nextState);
    currentState = nextState;
  }

  return history;
}

module.exports = transformStateWithClones;
