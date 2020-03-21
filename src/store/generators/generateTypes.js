function createTypeShape(entity, type) {
  return {
    REQUEST: `${entity}/${type}/REQUEST`,
    SUCCESS: `${entity}/${type}/SUCCESS`,
    FAILURE: `${entity}/${type}/FAILURE`,
  };
}

const types = ['list', 'show', 'create', 'remove', 'update'];

export function generateTypes(config) {
  const {name, plural, actions = []} = config;

  const requests = {};
  // eslint-disable-next-line array-callback-return
  actions.map(action => {
    requests[action] = createTypeShape(name, action);
  });

  // eslint-disable-next-line array-callback-return
  types.map(type => {
    requests[type] = createTypeShape(name, type);
  });

  return {
    request: plural,
    ...requests,
  };
}
