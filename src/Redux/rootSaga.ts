import { all } from '@redux-saga/core/effects'
import LoginSaga from '../Pages/Login/Sagas'


export default function* rootSaga () {
    yield all([
      ...LoginSaga
    ]);
}