// Public Actions
export const start = 'retrospective/start';
export const join = 'retrospective/join';
export const finish = 'retrospective/finish';
export const addIdea = 'retrospective/addIdea';
export const vote = 'retrospective/vote';

// Internal Actions
export const initializeData = 'retrospective/initializeData';
export const addVote = 'retrospective/addVote';
export const removeVote = 'retrospective/removeVote';

// Server (real-time) actions
export const Server = {
  start,
  join,
  finish,
  addIdea,
  initializeData,
  addVote,
  removeVote
};
