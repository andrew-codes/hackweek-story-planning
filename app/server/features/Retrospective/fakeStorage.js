let id = 0;
let ideas = [];
let isInProgress = false;
let isJoined = false;

export const saveIdea = (idea) => {
  idea = {...idea, id: id++, votes: {}};
  ideas.push(idea);
  return idea;
};

export const saveVote = (username, id, numberOfVotes) => {
  let idea = ideas.find(idea => idea.id === id);
  if (!idea.votes[username]){
    idea.votes[username] = 0;
  }
  idea.votes[username] += numberOfVotes;
  return idea;
};

export const clearIdeas = () => (ideas = []);

export const saveIsJoined = (inProgress, joined) => {
  isInProgress = inProgress;
  isJoined = joined;
  return {isInProgress, isJoined};
};

export const getState = () => ({
  ideas,
  isInProgress
});
