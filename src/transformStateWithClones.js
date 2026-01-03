'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const copy = { ...state };

  if (actions.type === 'addProperties') {
    if (typeof actions.extraData === 'object' && actions.extraData !== null) {
      Object.assign(copy, actions.extraData);
    }
  }

  if (actions.type === 'removeProperties') {
    if (Array.isArray(actions.keysToRemove)) {
      for (const key of actions.keysToRemove) {
        delete copy[key];
      }
    }
  }

  if (actions.type === 'clear') {
    Object.keys(copy).forEach((key) => delete copy[key]);
  }

  return copy;
}
module.exports = transformStateWithClones;
