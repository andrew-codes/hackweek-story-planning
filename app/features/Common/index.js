export const createServerActionCreator = createAction => (actionType, payload) => createAction(`server/${actionType}`, payload);
