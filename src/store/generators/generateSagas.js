import {call, put, takeLatest, all, takeEvery} from 'redux-saga/effects';
import queryString from 'query-string';
import api from 'api';

export function generateSagas(types) {
  const {request} = types;

  return {
    *create({payload}) {
      try {
        const {
          data: {data},
        } = yield call(api.post, `${request}`, payload);

        yield put({type: types.remove.SUCCESS, payload: data});
      } catch (error) {
        yield put({type: types.remove.FAILURE, payload: String(error)});
      }
    },

    *list({payload}) {
      try {
        let urlParams;

        if (payload?.params) {
          urlParams = queryString.stringify(payload.params);
        }

        const {
          data: {data},
        } = yield call(api.get, `${request}?${urlParams || ''}`);

        yield put({type: types.list.SUCCESS, payload: data});
      } catch (error) {
        yield put({type: types.list.FAILURE, payload: String(error)});
      }
    },

    *show({payload}) {
      const {id, action} = payload;
      const name = 'show';

      try {
        const {
          data: {data},
        } = yield call(
          api.get,
          `${request}/${id}${action ? `/${action}` : ''}`,
        );

        yield put({type: types[action || name].SUCCESS, payload: data});
      } catch (error) {
        yield put({
          type: types[action || name].FAILURE,
          payload: String(error),
        });
      }
    },

    *update({payload}) {
      try {
        const {
          data: {data},
        } = yield call(api.put, `${request}`, payload);

        yield put({type: types.update.SUCCESS, payload: data});
      } catch (error) {
        yield put({type: types.update.FAILURE, payload: String(error)});
      }
    },

    *remove({payload}) {
      const {id} = payload;
      try {
        const {
          data: {data},
        } = yield call(api.delete, `${request}/${id}`);

        yield put({type: types.remove.SUCCESS, payload: data});
      } catch (error) {
        yield put({type: types.remove.FAILURE, payload: String(error)});
      }
    },
  };
}

export function* generateSagaDefaultRoot(types, sagas) {
  return all(
    yield takeLatest(types.create.REQUEST, sagas.create),
    yield takeLatest(types.list.REQUEST, sagas.list),
    yield takeEvery(types.show.REQUEST, sagas.show),
    yield takeLatest(types.update.REQUEST, sagas.update),
    yield takeLatest(types.remove.REQUEST, sagas.remove),
  );
}
