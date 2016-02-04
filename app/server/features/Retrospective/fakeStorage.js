let id = 0;
let ideas = [];
let isInProgress = false;
let isJoined = false;

export const saveIdea = (idea) => {
  idea = {...idea, id: id++};
  ideas.push(idea);
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
  //isJoined
});
