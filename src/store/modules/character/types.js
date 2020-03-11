import {generateTypes} from 'store/generators/generateTypes';

export default generateTypes({
  name: 'character',
  plural: 'characters',
  actions: ['search'],
});
