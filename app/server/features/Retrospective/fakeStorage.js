let id = 0;
let ideas = [];
let isInProgress = false;
let isJoined = false;

export const saveIdea = (idea) => {
  idea = {...idea, id: id++, votes: 0};
  ideas.push(idea);
  return idea;
};

export const saveVote = (id, voteCount) => {
  let idea = ideas.find(idea => idea.id === id);
  idea.votes += voteCount;
  if (idea.votes < 0) {
    idea.votes = 0;
  }
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
