export function generateActions(types = {}) {
  const actions = {};

  Object.keys(types).map(key => {
    return Object.assign(actions, {
      [key](payload) {
        return {
          type: types[key].REQUEST,
          payload,
        };
      },
    });
  });

  return actions;
}
