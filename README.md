# Heroes Search

Criado com o [create-react-app](https://github.com/facebook/create-react-app)

## URL para acessar

https://paesvitor.github.io/heroes-search

Deployado com o gh-pages

## O Que eu usei

- React 16.13.0 com hooks
- [TC39/Proposal Optional Chaining](https://github.com/tc39/proposal-optional-chaining)
- React Testing Library para testes
- Styled Components, tools e media queries para estilos
- Redux com Redux Saga e Redux Logger em desenvolvimento

## Subindo em dev

```
yarn install
```

```
yarn start
```

## Store

A Store proposta é criada com o intuito de reduzir a quantidade de código que é necessário escrever em uma aplicação React que utiliza o Redux como o seu gerenciador central de estado.

O uso do Redux, apesar de verboso, é extremamente necessário em qualquer aplicação de larga escala e que pretende ser escalada e mantida ao longo do tempo.

Na Store da aplicação nós encontramos uma pasta de generators que é responsável por gerar ACTIONS, TYPES e SAGAS.

Nessa proposta de Store, todas as actions seguem a risca o padrão de código de uma API Rest, respeitando os seus verbos.

Todo módulo representa uma entidade.
Todo módulo possui types, sagas, actions e reducers.

As actions default em uma entidade são:

- List (HTTP GET)
- Show/:id (HTTP GET)
- Create (HTTP POST)
- Remove/:id (HTTP DELETE)
- Update/:id (HTTP PUT)

Ao declarar os tipos na nossa store, definimos o nome da entidade, o plural da entidade e todas as actions que são possiveis ser chamadas a partir dessa entidade, nesse caso, na aplicação proposta, nós encontramos na entidade Characters a action /comics que lista os quadrinhos para um determinado personagem, nesse caso, ao definir os tipos, criamos tambem uma action chamada 'comics'

```
import {generateTypes} from 'store/generators/generateTypes';

export default generateTypes({
  name: 'character',
  plural: 'characters',
  actions: ['comics'],
});
```

Para cada action é necessário criar um reducer com o nome da action, para assim manter o padrão de código e escalabilidade da store.

Todos os reducers seguem o padrão

```
const initialState = {
  data: [],
  loading: true,
  error: false,
};
```

E todas as actions possuem REQUEST (que da inicio a ação), SUCCESS (que despacha o payload com o novo estado para o reducer) e FAILURE (indicando a falha da action)

Todas as actions são interceptadas por uma saga, que é responsável por fazer as chamadas para a API e então verificar o sucesso ou falha dessas chamadas e então disparar um sucesso ou falha para o reducer.

Dessa maneira, mantemos uma store extremamente consistente com o back-end, seguindo os principios de design do rest.

Essa ideia de store é inspirada no ngrx/data do Angular.
